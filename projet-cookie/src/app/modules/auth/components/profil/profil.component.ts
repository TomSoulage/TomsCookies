import { Component, OnInit } from '@angular/core';
import { getFirestore } from '@angular/fire/firestore';
import { timeStamp } from 'console';
import { doc, getDoc } from 'firebase/firestore';
import { IPanier } from 'src/app/core/models/ipanier';
import { AuthService } from 'src/app/core/services/auth.service';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService, private panierService: PanierService) { }
  
  
  ngOnInit(): void {
  }

  afficherEmail(){
    return this.authService.getEmail();
  }
  
  afficherDateCreationCompte(){
    return this.authService.getDateCreationCompte();
  }
  
  afficherDerniereConnexion(){
    return this.authService.getDerniereConnexion();
  }


}

