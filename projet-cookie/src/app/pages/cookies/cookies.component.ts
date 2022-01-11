import { Component, OnInit} from '@angular/core';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {

  constructor(public cookiesListeService : CookiesListService) { }
  isShown: boolean = false ; // hidden by default


  toggleShow() {

  this.isShown = ! this.isShown;

  }

  ngOnInit() {
    this.cookiesListeService.getCookies();

  }

 
}
