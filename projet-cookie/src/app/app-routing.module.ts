import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { AuthGuard } from './modules/auth/security/auth.guard';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { AdminGuard } from './modules/admin/security/admin.guard';
const routes: Routes = [

  {path:'',component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'cookies', component:CookiesComponent},
  {path:'',    loadChildren: () =>
  import('./modules/auth/auth.module').then((m) => m.AuthModule),canActivate: [AuthGuard]},
  {path:'admin',    
  loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),canActivate: [AdminGuard],
   },
 {path:'**', component:Erreur404Component},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
