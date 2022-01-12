import { Component, OnInit} from '@angular/core';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICookie } from 'src/app/core/models/icookie';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor(public cookiesListeService : CookiesListService) { }
  
  listeAfficherRecette = this.cookiesListeService.listeAfficherRecette ;


  afficherRecette(n: number) {

    if(this.listeAfficherRecette[n]){
      this.listeAfficherRecette[n] = false;
    }else {
      this.listeAfficherRecette[n] = true;
    }
  }

  estAfficher(n: number){
    return this.listeAfficherRecette[n] ; 
  }

  


  ngOnInit() {

  }

 
}
