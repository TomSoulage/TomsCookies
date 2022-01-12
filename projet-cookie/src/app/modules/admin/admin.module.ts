import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCookieComponent } from './components/update-cookie/update-cookie.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule } from '@angular/forms';

import { CookiesManagementComponent } from './components/cookies-management/cookies-management.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UpdateCookieComponent,
    CookiesManagementComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
