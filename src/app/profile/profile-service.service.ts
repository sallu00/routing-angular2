import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
@Injectable() // may need to inject other dependencies in this service also

export class ProfileService {

    message : string = 'good morning';
    // Observable string source
    //private dataStringSource = new Subject<string>();
    // Observable string stream
    //dataString$ = this.dataStringSource.asObservable();
    // Service message commands
    change(data: string) {
        console.log(data);
        this.message=data;
        
    }
    getvalue(){
        console.log( this.message);
        return this.message;
    }
}
