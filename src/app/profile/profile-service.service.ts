import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable() // may need to inject other dependencies in this service also

export class ProfileService {
    message: string = 'good morning';
    private notificationSource = new Subject<any>();
    public notificationReceived = this.notificationSource.asObservable();
    //parentSubject: Subject<any>=new Subject();
    notify(notification: any) {
        this.notificationSource.next(notification);
    }
    /*change(data: string) {
        console.log(data);
        this.message = data;
    }
    getvalue() {
        console.log(this.message);
        return this.message;
    }*/
}
