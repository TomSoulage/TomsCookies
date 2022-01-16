import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  
  constructor(private authService: AuthService, private router: Router){};

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {
      const user = await this.authService.getCurrentUser();
      let estConnecte = false; 
      let accesRoute = false; 

      //Vérification de la connexion
      if(user!=null){
        estConnecte = true; 
      }else{
        estConnecte = false; 
      }

      console.log("page : ");
      console.log(state.url);
      console.log("connexion : ");
      console.log(estConnecte);
      
      if(estConnecte){
        if( (state.url=="/connexion") || (state.url=="/inscription")) {
          accesRoute = false; 
        }else{
          accesRoute = true; 
        }
      }else{
        if( (state.url=="/connexion") || (state.url=="/inscription")) {
          accesRoute = true; 
        }else{
          accesRoute = false; 
        }
      } 

      console.log("connexion : ");
      console.log(estConnecte);
      console.log("accès route");
      console.log(accesRoute);

      if(!accesRoute){
        this.router.navigate(['/accueil']);
        return false; 
      }else{
        return true; 
      }
  }

}
