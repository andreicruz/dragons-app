import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
       if (!this.authService.getAuthentication) {
         this.router.navigateByUrl('/login');
       }
       
       return this.authService.getAuthentication();
    }
}