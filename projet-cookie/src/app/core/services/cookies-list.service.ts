import { Injectable } from '@angular/core';
import { deleteDoc } from '@angular/fire/firestore';
import { getFirestore, doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { ICookie } from '../models/icookie';


@Injectable({
  providedIn: 'root'
})
export class CookiesListService {

  //Utiliser pour afficher la recette sur la liste des Cookies ( fonction avec bouton)
  listeAfficherRecette: Array<Boolean> = [];


  data = []
  
  db = getFirestore();
  collection = collection(this.db, "cookies")

  constructor() { 
  }

  async addCookie(goutCookie:string,prixCookie:number,recetteCookie:string, imgCookie:string){
    try {
      const docRef = await addDoc(this.collection, {
        gout: goutCookie,
        prix: prixCookie,
        recette: recetteCookie,
        image : imgCookie
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  
  updateCookie(cookie: ICookie) {
    const docRef = doc(this.db, `cookies/${cookie.id}`);
    return setDoc(docRef, cookie);
  }

  deleteCookie(cookie: ICookie){
    const docRef = doc(this.db, `cookies/${cookie.id}`);
    return deleteDoc(docRef);
  }
  
  getCookies(): Observable<ICookie[]>{
    return collectionData(this.collection,{idField:'id'}) as Observable<ICookie[]>;
  }

  getCookieByID(id:string){
    const docRef = doc(this.db,`cookies/${id}`);
    return docData(docRef, { idField: 'id' }) as Observable<ICookie>;
  }


}


