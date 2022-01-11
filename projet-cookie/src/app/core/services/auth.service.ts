
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { ILoginData } from '../models/ilogin-data';
import * as firebase from 'firebase/compat';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  login({ email, password }: ILoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  register({ email, password }: ILoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  estConnecte() {

    const auth = getAuth();
    const user = auth.currentUser;    
    console.log(user);

    if (user!=null) {
        return true;
    }
      return false;

  }
}
