import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICookie } from 'src/app/core/models/icookie';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-update-cookie',
  templateUrl: './update-cookie.component.html',
  styleUrls: ['./update-cookie.component.css']
})
export class UpdateCookieComponent implements OnInit {

  listeCookies = this.cookieService.listeCookies;
  cookie!: any[] ;
  _id:string | null;
  
  formGroup: FormGroup | any;
  titleAlert: string = 'Ce champ est requis!';
  post: any = '';

  constructor(private router:ActivatedRoute, private cookieService: CookiesListService,private formBuilder: FormBuilder) { 
    this._id=  this.router.snapshot.paramMap.get("id");
 
  }


  ngOnInit(): void {
   
    // if(this._id) this.cookie = this.cookieService.getCookieById(this._id) as ICookie
    //console.log("liste" + this.listeCookies);
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'gout': ['test', [Validators.required]],
      'image': ['test', Validators.required],
      'prix': ['test', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'recette': ['test', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      'validate': ''
    });
  }

  createFormDynamique() {

    this.cookieService.getCookieById("5zRwXGS2JklkDT0nd7ju").then(
      cookie => {
        
      } )

    this.formGroup = this.formBuilder.group({
      'gout': ['test', [Validators.required]],
      'image': ['test', Validators.required],
      'prix': ['test', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'recette': ['test', [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      'validate': ''
    });
  }




  onSubmit(post: any) {
    this.post = post;
    console.log(post);
    this.cookieService.addCookie(post['gout'],post['prix'],post['recette'],post['image'])
  }

}
