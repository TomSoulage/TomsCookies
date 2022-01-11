import { Injectable } from '@angular/core';
import { docSnapshots } from '@angular/fire/firestore';
import { getFirestore, doc, setDoc, collection, getDoc, onSnapshot, DocumentReference, DocumentData, addDoc, getDocs } from 'firebase/firestore';
import { docData } from 'rxfire/firestore';
import { ICookie } from '../models/icookie';

@Injectable({
  providedIn: 'root'
})
export class CookiesListService {

  listeCookies:Array<ICookie> = [];

  constructor() { 
    this.getCookies();
  }

  
  db = getFirestore();
  collection = collection(this.db, "cookies")

  async addCookie(goutCookie:string,prixCookie:number,recetteCookie:string, imgCookie:string){
    try {
      const docRef = await addDoc(this.collection, {
        gout: goutCookie,
        prix: prixCookie,
        recette: recetteCookie,
        image : imgCookie
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }



  async getCookies(){
    const s = this;
    // let i = 0 ;
    const querySnapshot = await getDocs(this.collection);
    querySnapshot.forEach((doc) => {
  
      /* this.listeCookies[0]['gout'] = JSON.stringify(doc.data()['gout']);
      this.listeCookies[0]['prix'] = Number(JSON.stringify(doc.data()['prix']));
      this.listeCookies[0]['recette'] = JSON.stringify(doc.data()['recette']); */
      // i+=1;
      //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    }); 
  }
  
  
/* fonction qui marche
  addCookie(goutCookie:string,prixCookie:number,descriptionCookie:string, imgCookie:string){
    const data = {
      gout: goutCookie,
      prix: prixCookie,
      description: descriptionCookie,
      image : imgCookie
    };
    setDoc(this.cookie,data)
    console.log('Cookie ajouté');
  }

*/

/*   
  cookiesListe = collection(this.firestore,'cookies');

  async getCookie(c : DocumentReference<DocumentData>){
    c = this.cookie
    onSnapshot(c,docSnapshot => {
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();
        console.log(`In realtime, docData is ${JSON.stringify(docData)}`)
      }

    })
  }


  async getCookies(c : DocumentReference<DocumentData>){
    c = this.cookie
    onSnapshot(c,docSnapshot => {
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();
        console.log(`In realtime, docData is ${JSON.stringify(docData)}`)
      }

    })
  } */

}
function db(db: any, arg1: string): import("@firebase/firestore").CollectionReference<DocumentData> {
  throw new Error('Function not implemented.');
}

