import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
@Injectable() // may need to inject other dependencies in this service also

export class ProfileService {
    // Observable string source
    private dataStringSource = new Subject<string>();
    // Observable string stream
    dataString$ = this.dataStringSource.asObservable();
    // Service message commands
    change(data: string) {
        this.dataStringSource.next(data);
    }
}
