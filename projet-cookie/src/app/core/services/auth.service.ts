
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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: Auth) {}

  userData: any;
  db = getFirestore();

/*   this.auth.db.subscribe(user => {
    if(user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      //JSON.parse(localStorage.getItem('user'));
    }else {
      localStorage.setItem('user', null);
      //JSON.parse(localStorage.getItem('user'));
    }
  })
} */
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

    const auth = getAuth();
    const user = auth.currentUser;    

    if (user!=null) {
        return true;
    }
      return false;

  }




}
