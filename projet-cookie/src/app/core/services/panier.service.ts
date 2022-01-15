import { Injectable } from '@angular/core';
import { Observable } from '@firebase/util/dist/src/subscribe';
import { deleteDoc, doc, getFirestore, setDoc, collection, updateDoc, addDoc } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { ICookie } from '../models/icookie';
import { IPanier } from '../models/ipanier';
import { AuthService } from './auth.service';
import { CookiesListService } from './cookies-list.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService  {

  constructor(private authService : AuthService, private cookieService: CookiesListService)  { }

  
  db = getFirestore();
  collection = collection(this.db, "paniers");

  idUtilisateur = this.authService.getUserId();
  
  async deletePanierUser(){
    await deleteDoc(doc(this.db, "paniers", this.idUtilisateur));
  }

  getPanierByID(id:string){
    const docRef = doc(this.db,`paniers/${id}`);
    return docData(docRef, { idField: 'id' }) as unknown as Observable<IPanier>;
  }

  deleteCookiesPanier(panier: IPanier, index:number){

    //On supprime les éléments de la liste liés au cookie choisi
    panier.listeIdCookies.splice(index,1);
    panier.listeNbCookies.splice(index,1);
    panier.prixTotal -= panier.listePrixTotalParCookie[index];
    panier.listePrixTotalParCookie.splice(index,1);

    //Mise à jour dans la base de données
    const docRef = doc(this.db,`paniers/${panier.id}`);
    return updateDoc(docRef,{listeIdCookies: panier.listeIdCookies, listeNbCookies: panier.listeNbCookies, listePrixTotalParCookie: panier.listePrixTotalParCookie, prixTotal: panier.prixTotal})

  }


  ajouterCookiePanier(panier: IPanier, cookie: ICookie){
    console.log("au moment d'ajouter");
    console.log(panier);

    //Cas où le cookie n'est pas encore dans le panier
    if(!this.cookieEstDansLePanier(panier,cookie)){
      panier.listeIdCookies.push(cookie.id);
      panier.listeNbCookies.push(1);
      panier.listePrixTotalParCookie.push(cookie.prix);
      console.log(panier.prixTotal);
      panier.prixTotal += cookie.prix;
      console.log(panier.prixTotal);

    }else{
      const index = panier.listeIdCookies.indexOf(cookie.id);
      panier.listeNbCookies[index] = 1 + this.getNbDeCeCookieDansLePanier(panier,cookie);
      panier.listePrixTotalParCookie[index] = cookie.prix * panier.listeNbCookies[index];
      panier.prixTotal += cookie.prix;
    }
  
     //Mise à jour dans la base de données
     const docRef = doc(this.db,`paniers/${panier.id}`);
     return updateDoc(docRef,{listeIdCookies: panier.listeIdCookies, listeNbCookies: panier.listeNbCookies, listePrixTotalParCookie: panier.listePrixTotalParCookie, prixTotal: panier.prixTotal})    


  }

  cookieEstDansLePanier(panier: IPanier, cookie: ICookie){

    console.log("panier : " );
    console.log(panier);
    console.log("cookie:");
    console.log(cookie);

   let res = panier.listeIdCookies.filter(res => res == cookie.id) 
    
    if(res.length>0){
      return true;
    }else {
      return false; 
    }
  }

  getNbDeCeCookieDansLePanier(panier: IPanier, cookie: ICookie){
    const index = panier.listeIdCookies.indexOf(cookie.id);
    const nbDeCeCookieActuel = panier.listeNbCookies[index];
    return nbDeCeCookieActuel;
  } 

 
}
