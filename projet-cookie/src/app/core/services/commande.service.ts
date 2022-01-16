import { Injectable } from '@angular/core';
import { collection, collectionData, docData } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { addDoc, doc, getFirestore, query, setDoc, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { ICommande } from '../models/icommande';
import { IPanier } from '../models/ipanier';
import { AuthService } from './auth.service';
import { CookiesListService } from './cookies-list.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private authService : AuthService, private cookieService: CookiesListService, private router: Router, private snackBar: MatSnackBar)  { }

  db = getFirestore();

  commande: ICommande = {
    idUtilisateur: this.authService.getUserId(),
    listeIdCookies: [""],
    listeNbCookies: [0],
    listePrixTotalParCookie: [0],
    prixTotal: 0
  }
 

 
  getCommande(panier: IPanier){
    let date = new Date();
    let mois = date.getMonth()+1
    this.commande.date = date.getDate() + '-' + mois  + '-' + date.getFullYear();
    this.commande.listeIdCookies = panier.listeIdCookies;
    this.commande.listeNbCookies = panier.listeNbCookies;
    this.commande.listePrixTotalParCookie = panier.listePrixTotalParCookie;
    this.commande.prixTotal = panier.prixTotal;
    this.addCommande(this.commande).then(res=>
    { this.authService.deletePanierUser() })
    .then(() =>{this.authService.creationPanierUtilisateur(this.authService.getUserId());
    })
    .then(()=>{ this.router.navigate(['panier']); })
    .then(()=>{ this.snackBar.open('Commande validée ! ','Fermer', {"duration": 7000,panelClass: ["sb-success"]}) })
    .catch((e) => this.snackBar.open(e.message,'Fermer', {"duration": 7000,panelClass: ["sb-error"]}));


    
  }

  addCommande(commande: ICommande) {
    const docRef = collection(this.db, 'commandes'); 
    return addDoc(docRef, commande);
  }

  getCommandes(): Observable<ICommande[]>{
    const q = query(collection(this.db, "commandes"), where("idUtilisateur", "==", this.authService.getUserId()));
    return collectionData(q,{idField:'id'}) as Observable<ICommande[]>;
  }

  getCommandeByID(id:string){
    const docRef = doc(this.db,`commandes/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<ICommande>;
  }

}
