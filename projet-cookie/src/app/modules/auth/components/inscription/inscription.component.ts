import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/core/models/ilogin-data';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(   private readonly authService: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  register(data: ILoginData) {
    this.authService
      .register(data)
      .then(() => this.router.navigate(['/connexion']))
      .catch((e) => console.log(e.message));
  }
}
