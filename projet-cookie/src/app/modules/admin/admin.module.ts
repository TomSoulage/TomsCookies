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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

import { ReactiveFormsModule } from '@angular/forms';

import { CookiesManagementComponent } from './components/cookies-management/cookies-management.component';
import { AddCookieComponent } from './components/add-cookie/add-cookie.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ListeCommandesComponent } from './components/liste-commandes/liste-commandes.component';

@NgModule({
  declarations: [
    UpdateCookieComponent,
    CookiesManagementComponent,
    AddCookieComponent,
    ListeCommandesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
