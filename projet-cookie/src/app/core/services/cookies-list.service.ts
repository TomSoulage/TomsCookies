import { Injectable } from '@angular/core';
import { deleteDoc, docSnapshots } from '@angular/fire/firestore';
import { getFirestore, doc, setDoc, collection, getDoc, onSnapshot, DocumentReference, DocumentData, addDoc, getDocs } from 'firebase/firestore';
import { list } from 'rxfire/database';
import { docData } from 'rxfire/firestore';
import { ICookie } from '../models/icookie';


@Injectable({
  providedIn: 'root'
})
export class CookiesListService {

  listeCookies:Array<ICookie> = [];
  //On récupère les id de chaque doc ( 1 doc = 1 cookie sur Firestore)
  listeId: Array<String> = [];
  
  //Utiliser pour afficher la recette sur la liste des Cookies ( fonction avec bouton)
  listeAfficherRecette: Array<Boolean> = [];

  cookie : Array<any> = [];

  data = []
  
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

   const querySnapshot = await getDocs(this.collection);
    
    querySnapshot.forEach((doc) => {
      this.listeId.push(doc.id);
      this.listeCookies.push(doc.data() as ICookie);
    });  

    for (let i=0; i < this.listeCookies.length; i++){
      this.listeCookies[i]["id"] = String(this.listeId[i]);
      this.listeAfficherRecette[i] = false;
    }
  }

  
  async getCookieById(id:string): Promise<any[]>{
    const cookie = [];

    const docRef = doc(this.db, "cookies",id);
    const docSnap = await getDoc(docRef);
    
      if (docSnap.exists()) {
        cookie.push(docSnap.data() as ICookie);
      } else {
        
        console.log("No such document!");
      } 

      return cookie; 
  } 


  async deleteCookie(id: string){
    await deleteDoc(doc(this.db, "cookies", id));
  }


}


