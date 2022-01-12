import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCookieComponent } from './modules/admin/components/add-cookie/add-cookie.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './modules/auth/components/connexion/connexion.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { PanierComponent } from './pages/panier/panier.component';

import { AdminGuard } from './modules/admin/security/admin.guard';
import { UpdateCookieComponent } from './modules/admin/components/update-cookie/update-cookie.component';
import { CookiesManagementComponent } from './modules/admin/components/cookies-management/cookies-management.component';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]
  },  
  {path:'',    loadChildren: () =>
  import('./modules/auth/auth.module').then((m) => m.AuthModule),
},
  {path:'accueil',component:AccueilComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'cookies', component:CookiesComponent},
  {path:'panier', component:PanierComponent},
  {path:'admin/add-cookie', component:AddCookieComponent},
  {path:'update-cookie/:id', component:UpdateCookieComponent},
  {path:'admin/cookies-management', component:CookiesManagementComponent},
  {path:'admin/users-management', component:CookiesManagementComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
