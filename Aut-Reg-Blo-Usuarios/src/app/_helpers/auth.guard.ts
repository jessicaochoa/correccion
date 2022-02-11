import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // Si se encuentra autorizado retorna un true
            return true;
        }

        // si no se encuentra logueado o no tiene acceso se retorna un false y se redirige a el LOGIN
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}