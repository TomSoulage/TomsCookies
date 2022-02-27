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

  menuMobileDisplay = "none";
  isCloseDisplay = "none";
  isOpenDisplay = "block";
  isOpen = false; 

  ngOnInit(): void {
      this.isOpen = false; 
      this.isCloseDisplay = "none";
      this.isOpenDisplay = "block";
      console.log("test");
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

  openMenu(){

    if(!this.isOpen){
      this.menuMobileDisplay = "flex";
      this.isOpen = true; 
      this.isCloseDisplay = "block";
      this.isOpenDisplay = "none";

    }else{
      this.menuMobileDisplay = "none";
      this.isOpen = false; 
      this.isCloseDisplay = "none";
      this.isOpenDisplay = "block";

    }  
  }
  
}
