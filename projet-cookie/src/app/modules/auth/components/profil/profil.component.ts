import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { CommandeService } from 'src/app/core/services/commande.service';
import { PanierService } from 'src/app/core/services/panier.service';
import { ICommande } from 'src/app/core/models/icommande';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { ICookie } from 'src/app/core/models/icookie';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  commandes: ICommande[] = [];
  cookies:ICookie[] = [];

  panelOpenState = false;

  constructor(private authService: AuthService, private panierService: PanierService,private commandeService: CommandeService,private cookieService: CookiesListService) { }
  

  ngOnInit(): void {
    this.cookieService.getCookies().subscribe(
      res => this.cookies = res
    );
    this.commandeService.getCommandes().subscribe(
      res =>  {this.commandes=res} 
    )
    this.commandeService.getCommandes().subscribe(
      res =>  console.log(res)
    )
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

  getCookieName(id:String){
    return this.cookies.filter(res=> res.id == id)[0]["gout"];
  }

}

