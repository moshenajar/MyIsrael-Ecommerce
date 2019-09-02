import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service'
import { RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription, Observable, Subject } from 'rxjs';
import { take, tap, skip } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    public isAuthenticated: boolean;
    constructor(private authService: AuthService, private router: Router) { }
    // ngOnInit() {
    //     this.authService._authAuthenticated$.subscribe(status => this.isAuthenticated = status);
    //     debugger;
    //   }
    
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                    // var subject = new Subject<boolean>();

                    // this.authService.getUser().then(
                    //     (user) => {
                    //     if(user)
                    //         subject.next(true);
                    //     else
                    //     this.router.navigate(['/']);
                    //     }
                    // );

                    // return subject.asObservable();
                    //this.authService._authAuthenticated$.subscribe(status => this.isAuthenticated = status);
                    // this.authService._authAuthenticated$
                    //     .subscribe(
                    //         (isAuthenticated: boolean) => {
                    //             debugger;
                    //             this.isAuthenticated = isAuthenticated;
                    //         }
                    //     );
                    return this.authService._authAuthenticated$.pipe(
                        tap(x => console.log(x)),
                        skip(1),
                        take(1)
                    );
                    // debugger;
                    // if(this.isAuthenticated) 
                    //     return true;
                    // else
                    // this.router.navigate(['/']);

        }
}

