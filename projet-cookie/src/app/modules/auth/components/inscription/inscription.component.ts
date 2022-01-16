import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/core/models/ilogin-data';
import { AuthService } from 'src/app/core/services/auth.service';
import { PanierService } from 'src/app/core/services/panier.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(   private readonly authService: AuthService, private readonly router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  register(data: ILoginData) {
    this.authService
      .register(data)
      .then(()=>this.snackBar.open('Inscription validée', 'Fermer', {"duration": 4000, panelClass: ["sb-success"]}))
      .then(() => this.router.navigate(['/connexion']))
      .catch((e) => this.snackBar.open(e.message,'Fermer', {"duration": 7000,panelClass: ["sb-error"]}));
  }



}
