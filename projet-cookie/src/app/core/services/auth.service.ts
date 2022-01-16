
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ILoginData } from '../models/ilogin-data';
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {
  }


  userData: any;
  db = getFirestore();

  verif(){
        // Listen for authentication state to change.
    onAuthStateChanged(this.auth, user => {
      if (user != null) {
       return true; 
      }else{
        return false;
      }
    
      // Do other things
    });
    return false; 
  }


  

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
      }else{
        return false;
      }
  }

  // Utiliser pour les guards
  getCurrentUser() {
    return new Promise((resolve, reject) => {
       const unsubscribe = this.auth.onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
          console.log(user);
       }, reject);
    });
  }

  //Utiliser pour les guards
  getCurrentUserIsAdmin() {
    return new Promise((resolve, reject) => {
       const unsubscribe = this.auth.onAuthStateChanged(user => {
          unsubscribe();
          if((user?.uid=="5nzQrtyZTOVzaKLWjNQB60rthmz2")&& (user?.email=="admin@gmail.com")){
            resolve(user);
          }else{
            resolve(null);
          }
       }, reject);
    });
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

  async deletePanierUser(){
    if(this.auth.currentUser!=null){
      await deleteDoc(doc(this.db, "paniers", this.auth.currentUser.uid));
    }
  }

}
