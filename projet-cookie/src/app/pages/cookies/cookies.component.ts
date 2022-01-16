import { Component, OnInit} from '@angular/core';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICookie } from 'src/app/core/models/icookie';
import { PanierService } from 'src/app/core/services/panier.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IPanier } from 'src/app/core/models/ipanier';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  cookies:ICookie[] = [];
  panier: IPanier = {
    id: this.authService.getUserId(),
    listeIdCookies: [""],
    listeNbCookies: [0],
    listePrixTotalParCookie: [0],
    prixTotal: 0
  }
  constructor(public cookiesService : CookiesListService, private panierService: PanierService, private authService: AuthService, private formBuilder: FormBuilder, private snackBar: MatSnackBar) { }

  //Affichage recette 
  listeAfficherRecette = this.cookiesService.listeAfficherRecette ;

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

  
  ajouterAuPanier(cookie: ICookie){
    if(!this.estCo()){
       return this.snackBar.open('Vous devez vous connecter pour ajouter des cookies au panier', 'Fermer', {"duration": 2000, panelClass: ["sb-error"]});
    }else{
      return this.panierService.ajouterCookiePanier(this.panier,cookie);
    }
  }



  // 

  //Panier
  formGroup: FormGroup | any;
  titleAlert: string = 'This field is required';
  post: any = '';
  
  createForm() {
    this.formGroup = this.formBuilder.group({
      'quantite': [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'validate': ''
    });
  }

  onSubmit(index: number,id: string, post:any) {
    this.post = post;
    console.log(post);
    //var prix = this.listeIdCookies[index]["prix"] * post["quantite"];
    //console.log(prix);
    var idUser = this.authService.getUserId()
    //this.panierService.addOrder(idUser,id,post["quantite"],prix);
  } 

  //

  ngOnInit() {

    this.cookiesService.getCookies().subscribe(
      res => this.cookies = res
    );
    this.panierService.getPanierByID(this.authService.getUserId()).subscribe(res => {
      this.panier = res;
    })    
 
  }

  estCo(){
    return this.authService.estConnecte();
  }

  recupId(){
    return this.authService.getUserId();
  }

}
