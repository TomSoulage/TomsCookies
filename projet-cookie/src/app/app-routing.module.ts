import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCookieComponent } from './admin/add-cookie/add-cookie.component';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'cookies', component:CookiesComponent},
  {path:'admin/add-cookie', component:AddCookieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
