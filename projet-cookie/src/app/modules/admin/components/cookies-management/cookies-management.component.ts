import { Component, OnInit } from '@angular/core';
import { ICookie } from 'src/app/core/models/icookie';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-cookies-management',
  templateUrl: './cookies-management.component.html',
  styleUrls: ['./cookies-management.component.css']
})
export class CookiesManagementComponent implements OnInit {

  cookies:ICookie[] = [];

  constructor(public cookiesService : CookiesListService) { }

  ngOnInit(): void {
    this.cookiesService.getCookies().subscribe(
      res => this.cookies = res
    );
  }

  delete(cookie: ICookie){
    this.cookiesService.deleteCookie(cookie);
    alert('Cookie supprimé !');    
  }
}

