import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService) { }


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
