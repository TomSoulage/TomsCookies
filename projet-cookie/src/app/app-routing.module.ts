import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AuthGuard } from './modules/auth/security/auth.guard';
const routes: Routes = [

  {path:'',component:AccueilComponent},
  {path:'accueil',component:AccueilComponent},
  {path:'cookies', component:CookiesComponent},
  {path:'panier', component:PanierComponent,canActivate:[AuthGuard]},
  {path:'',    loadChildren: () =>
  import('./modules/auth/auth.module').then((m) => m.AuthModule)},
  {path:'admin',    
  loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
/*   canActivate: [AdminGuard],
 */  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
