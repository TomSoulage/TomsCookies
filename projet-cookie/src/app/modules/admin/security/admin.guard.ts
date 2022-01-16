import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(private authService: AuthService, private router: Router){};

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>  {
      const user = await this.authService.getCurrentUserIsAdmin();
      let estConnecte = false; 
      let accesRoute = false; 

      //Vérification de la connexion
      if(user!=null){
        estConnecte = true; 
        accesRoute = true; 
      }else{
        estConnecte = false;
        accesRoute = false; 
      }

      if(!accesRoute){
        this.router.navigate(['/accueil']);
        return false; 
      }else{
        return true; 
      }  
  }
}
