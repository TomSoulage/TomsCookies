import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'cookies', component:CookiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
