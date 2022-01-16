import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormulaireUserComponent } from './components/formulaire-user/formulaire-user.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { ProfilComponent } from './components/profil/profil.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    ConnexionComponent,
    FormulaireUserComponent,
    InscriptionComponent,
    ProfilComponent,
    CommandesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class AuthModule { }
