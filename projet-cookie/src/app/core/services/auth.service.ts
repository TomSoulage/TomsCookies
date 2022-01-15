
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ILoginData } from '../models/ilogin-data';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  userData: any;
  db = getFirestore();


  login({ email, password }: ILoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: ILoginData) {
   
     return createUserWithEmailAndPassword(this.auth, email, password)
    .then(() => {
      
      if(this.auth.currentUser!=null){
        this.creationPanierUtilisateur(this.auth.currentUser.uid).then(
          ()=> {this.logout();
          })
      }else{
        this.logout();
      }
    })
   
     //gestion suppression page connexion quand on est déjà connecté
  }

 async creationPanierUtilisateur(id:string){
    if(id!='noId'){
      await setDoc(doc(this.db, "paniers",id), {
        listeIdCookies: [""],
        listeNbCookies: [0],
        listePrixTotalParCookie: [0],
        prixTotal: 0
      });
    }
    console.log("c'est créé");
  } 
  
  logout() {
    return signOut(this.auth);
  }
  
  estConnecte() {

    if (this.auth.currentUser!=null) {
        return true;
    }
      return false;

  }


  estAdmin(){    
    if((this.auth.currentUser?.uid=="5nzQrtyZTOVzaKLWjNQB60rthmz2") && (this.auth.currentUser?.email=="admin@gmail.com")){
      return true;  
    }else {
      return false; 
    }
  }


  getUserId() {
    if(this.auth.currentUser!=null){
      return this.auth.currentUser.uid; 
    }else {
      return "noId";
    }
  }

  

  getEmail() {
    return this.auth.currentUser?.email; 
  }

  getDateCreationCompte(){
    return this.auth.currentUser?.metadata.creationTime;
  }

  getDerniereConnexion(){
    return this.auth.currentUser?.metadata.lastSignInTime;
  }

}
