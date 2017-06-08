import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { CanActivate, ActivatedRoute ,  ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthService } from './profileAuth.service';
@Injectable() // may need to inject other dependencies in this service also
export class loginGuard implements CanActivate{
    constructor(private router: Router , private authService : AuthService , private route: ActivatedRoute){}

    canActivate(){
        if(!this.authService.isLoggedIn()){
            alert('aiseee nhi krteeeeee...register kro pehleeeeee');
            this.router.navigate(['login']);
        }
        return this.authService.isLoggedIn();
    }
}

//canDeactivate => user can navigate from that route if it is true otherwise not
//canActivate => user can navigate to the route if it's true otherwise not

