import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
  {path:'test', component:AppComponent},
  {path:'accueil',component:AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
