import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PanierService } from 'src/app/core/services/panier.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router, private panierService: PanierService) { }

  ngOnInit(): void {
  }

  estCo(){
    return this.authService.estConnecte();
  }

  estAdmin(){
    return this.authService.estAdmin();
  }

  estUserClassique(){
    return ((this.authService.estConnecte()) &&  !(this.authService.estAdmin()))
  }

  getNbCookiesPanier(){
    //this.panierService.getNbTotalCookiePanier(this.panierService.getPanierByID(this.authService.getUserId()));
  }

  deconnexion(){
    this.authService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
  
}
