import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPanier } from 'src/app/core/models/ipanier';
import { ICookie } from 'src/app/core/models/icookie';
import { AuthService } from 'src/app/core/services/auth.service';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { PanierService } from 'src/app/core/services/panier.service';
import { CommandeService } from 'src/app/core/services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])]
})
export class PanierComponent implements OnInit {

  constructor(private panierService: PanierService, private authService: AuthService,private cookiesService: CookiesListService, private router: Router,private activatedRoute: ActivatedRoute,private commandeService: CommandeService) { }

  panier: IPanier = {
    id: this.authService.getUserId(),
    listeIdCookies: [""],
    listeNbCookies: [0],
    listePrixTotalParCookie: [0],
    prixTotal: 0
  }

  cookies:ICookie[] = [];

  
  ngOnInit(): void {
    this.cookiesService.getCookies().subscribe(
      res => this.cookies = res
    );
    this.panierService.getPanierByID(this.authService.getUserId()).subscribe(res => {
      this.panier = res;
    })
  }

  getCookieName(id:String){
    return this.cookies.filter(res=> res.id == id)[0]["gout"];
  }

  getCookieImage(id:String){
    return this.cookies.filter(res=> res.id == id)[0]["image"];
  }

  delete(index:number){
    this.panierService.deleteCookiesPanier(this.panier,index);
  }

  validerCommande(panier: IPanier){
    this.commandeService.getCommande(panier);
  } 
}

