import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookiesListService } from 'src/app/core/services/cookies-list.service';
@Component({
  selector: 'app-add-cookie',
  templateUrl: './add-cookie.component.html',
  styleUrls: ['./add-cookie.component.css']
})
export class AddCookieComponent implements OnInit {

  constructor(public cookiesListeService : CookiesListService, private formBuilder: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  formGroup: FormGroup | any;
  titleAlert: string = 'Ce champ est requis!';
  post: any = '';

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'gout': [null, [Validators.required]],
      'image': [null, Validators.required],
      'prix': [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      'recette': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      'validate': ''
    });
  }

  onSubmit(post: any) {
    this.post = post;
    console.log(post);
    this.cookiesListeService.addCookie(post['gout'],post['prix'],post['recette'],post['image']);
    this.snackBar.open("Cookie ajouté ! ",'Fermer', {"duration": 7000,panelClass: ["sb-success"]});
    this.router.navigate(['/admin']);
  }

}
