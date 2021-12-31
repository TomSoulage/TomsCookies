import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HeaderComponent } from './structure/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './structure/footer/footer.component'; 
import { ConnexionComponent } from './pages/connexion/connexion.component'; 

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { CookiesComponent } from './pages/cookies/cookies.component'; 
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    CookiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
