import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCookieComponent } from './modules/admin/components/add-cookie/add-cookie.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './modules/auth/components/connexion/connexion.component';
import { CookiesComponent } from './pages/cookies/cookies.component';

const routes: Routes = [
  {path:'',    loadChildren: () =>
  import('./modules/auth/auth.module').then((m) => m.AuthModule),
},
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
