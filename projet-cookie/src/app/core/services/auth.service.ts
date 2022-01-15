
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ILoginData } from '../models/ilogin-data';
import { IUser } from '../models/iuser';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { error } from '@angular/compiler/src/util';

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
       this.logout();
     });
     //gestion suppression page connexion quand on est déjà connecté
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
      return this.auth.currentUser?.uid; 
  }


  getEmail() {
    return this.auth.currentUser?.email; 
  }

  getDateCreationCompte(){
    console.log(this.auth.currentUser?.metadata.lastSignInTime);
    return this.auth.currentUser?.metadata.creationTime;
  }

  getDerniereConnexion(){
    return this.auth.currentUser?.metadata.lastSignInTime;
  }


}
