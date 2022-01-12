import { Component, OnInit } from '@angular/core';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-cookies-management',
  templateUrl: './cookies-management.component.html',
  styleUrls: ['./cookies-management.component.css']
})
export class CookiesManagementComponent implements OnInit {

  constructor(public cookiesListeService : CookiesListService) { }

  ngOnInit(): void {
   
  }

  delete(id:string){
    this.cookiesListeService.deleteCookie(id);
  }
}

