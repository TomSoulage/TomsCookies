import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPanier } from 'src/app/core/models/ipanier';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { PanierService } from 'src/app/core/services/panier.service';

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

  constructor(public panierService: PanierService, private cookieService: CookiesListService, private router: Router,private activatedRoute: ActivatedRoute) { }

  panier : IPanier[] = [];

  //this.cookieService.getCookieById("ss").then(val => self = val);
  
  ngOnInit(): void {
   
    this.panier = this.panierService.listeDuPanier;
  }

  


  //this.cookieService();

  delete(id:string){
    this.panierService.deleteCookiePanier(id);
  }

}

