import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { get } from 'firebase/database';
import { ILoginData } from 'src/app/core/models/ilogin-data';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  constructor(private readonly authService: AuthService, private readonly router: Router,private snackBar: MatSnackBar) { 
    
  }

  ngOnInit(): void {

  }

  login(loginData: ILoginData) {
    this.authService
      .login(loginData)
      .then(() => {
        if(this.authService.estAdmin()){
          this.router.navigate(['/admin'])
        }else{
          this.router.navigate(['/profil'])
        }
      }) 
      .catch((e) =>  this.snackBar.open(e.message,'Fermer', {"duration": 7000,panelClass: ["sb-error"]}));
  }
  
}
