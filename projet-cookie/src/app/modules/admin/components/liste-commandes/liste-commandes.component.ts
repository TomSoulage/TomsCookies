import { Component, OnInit } from '@angular/core';
import { ICommande } from 'src/app/core/models/icommande';
import { ICookie } from 'src/app/core/models/icookie';
import { CommandeService } from 'src/app/core/services/commande.service';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.component.html',
  styleUrls: ['./liste-commandes.component.css']
})
export class ListeCommandesComponent implements OnInit {

  commandes: ICommande[] = [];
  cookies:ICookie[] = [];

  panelOpenState = false;
  
  constructor(private cookieService: CookiesListService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.cookieService.getCookies().subscribe(
      res => this.cookies = res
    );
    this.commandeService.getAllCommandes().subscribe(
      res =>  {this.commandes=res} 
    )
    this.commandeService.getAllCommandes().subscribe(
      res =>  {console.log(res)} 
    )
    
  }

  getCookieName(id:String){
    return this.cookies.filter(res=> res.id == id)[0]["gout"];
  }

}
