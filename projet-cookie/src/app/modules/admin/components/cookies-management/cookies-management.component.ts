import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICookie } from 'src/app/core/models/icookie';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-cookies-management',
  templateUrl: './cookies-management.component.html',
  styleUrls: ['./cookies-management.component.css']
})
export class CookiesManagementComponent implements OnInit {

  cookies:ICookie[] = [];

  constructor(public cookiesService : CookiesListService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cookiesService.getCookies().subscribe(
      res => this.cookies = res
    );
  }

  delete(cookie: ICookie){
    this.cookiesService.deleteCookie(cookie);
    this.snackBar.open("Cookie supprimé ! ",'Fermer', {"duration": 5000,panelClass: ["sb-success"]}); 
  }
}

