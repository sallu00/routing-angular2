import { Http , Response } from '@angular/http';
import { Resolve , ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()

export class ProfileResolver implements Resolve <any> {
    constructor(private http: Http){
        
    }
    resolve(): Observable<any>{
        return this.http.get('/assets/jsonData/users.json')
        .map( (res) => res.json() );
    }
}