import { Injectable } from '@angular/core';
import { addDoc, collection } from '@angular/fire/firestore';
import { deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { StorageReference } from 'firebase/storage';
import { ICookie } from '../models/icookie';
import { IPanier } from '../models/ipanier';
import { AuthService } from './auth.service';
import { CookiesListService } from './cookies-list.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  listeDuPanier:Array<IPanier> = [];

  //On récupère les id de chaque commande dans le panier ( 1 doc = 1 commande sur Firestore)
  listeIdCommandes:Array<String> = [];


  constructor(private authService : AuthService, private cookieService: CookiesListService) { }

  db = getFirestore();
  collection = collection(this.db, "panier");
  nom= ''; 

  async addOrder(idUser: string | undefined, idCookie:string,quantite:number,prix:number){
    try {
      const docRef = await addDoc(this.collection, {
        idUser: idUser,
        idCookie: idCookie,
        quantite: quantite,
        prix : prix
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
  getGoutCookie(n:string):any{
    return this.cookieService.getCookieById(n).then(
      cookie => {
        return cookie[0]["gout"];;
      } )
  }

  async getUserPanier(){
    var idUser = this.authService.getUserId();
    const querySnapshot = await getDocs(this.collection);
     
     querySnapshot.forEach((doc) => {
       this.listeDuPanier.push(doc.data() as IPanier);
       this.listeIdCommandes.push(doc.id);
     });  
 
     for (let i=0; i < this.listeDuPanier.length; i++){

        if(this.listeDuPanier[i]["idUser"]!=idUser){
          this.listeDuPanier.slice(i);
        }
       
     }

     for (let i=0; i < this.listeDuPanier.length; i++){

        this.listeDuPanier[i]["id"] = String(this.listeIdCommandes[i]);

        this.cookieService.getCookieById(this.listeDuPanier[i]["idCookie"]).then(
          cookie => {
            this.listeDuPanier[i]["nomCookie"] = cookie[0]["gout"];;
          } )
      }
   }

   async deleteCookiePanier(id: string){
    await deleteDoc(doc(this.db, "panier", id));

  }
  
}
