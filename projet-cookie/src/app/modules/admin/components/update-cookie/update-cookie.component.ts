import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ICookie } from 'src/app/core/models/icookie';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';

@Component({
  selector: 'app-update-cookie',
  templateUrl: './update-cookie.component.html',
  styleUrls: ['./update-cookie.component.css']
})
export class UpdateCookieComponent implements OnInit {
  _id: string | null;

  cookie!: ICookie;
  titleAlert: string = 'Ce champ est requis!';
  post: any = '';


  constructor(private router:ActivatedRoute, private cookieService: CookiesListService, public fb: FormBuilder, private snackBar: MatSnackBar) { 
    this._id=  this.router.snapshot.paramMap.get("id");
 
  }

  formGroup: FormGroup | any;

  ngOnInit(): void {
    
    this.initForm();
    if(this._id){
      this.cookieService.getCookieByID(this._id).subscribe(res => {
        this.cookie = res;
        this.createForm(this.cookie);
      })
    }
  }

  initForm() {
    this.formGroup = this.fb.group({
      'gout': '',
      'image': '',
      'prix': '',
      'recette': '',
      'validate': ''
    });
  }

  createForm(cookie: ICookie) {
    this.formGroup = this.fb.group({
      'gout': [this.cookie.gout, [Validators.required]],
      'image': [this.cookie.image, Validators.required],
      'prix': [this.cookie.prix, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'recette': [this.cookie.recette, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      'validate': ''
    });
  }

  onSubmit(post: any,) {
    this.post = post;
    console.log(post);
    let newCookie: ICookie = {
      id : this.cookie.id,
      gout : post['gout'],
      recette : post['recette'],
      prix : post['prix'],
      image : post['image']
    }

    this.cookieService.updateCookie(newCookie);
    this.snackBar.open("Cookie modifié ! ",'Fermer', {"duration": 5000,panelClass: ["sb-success"]});

  }
 
}
