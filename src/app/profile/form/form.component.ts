import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  subscription : Subscription;
  valu: string;
  @Input() parentSubject: Subject<any>;
  constructor(private _profileService: ProfileService) { 
    this.subscription=this._profileService.notificationReceived.subscribe(
      (message) => {
        this.valu=message;
      }
    )
   }

  ngOnInit() {
    
  }
  takeValue: string;
  submit(valu){
    //this.takeValue=valu.val;
    this.parentSubject.next(valu.val);
    //this._profileService.notify(this.takeValue);
    //console.log(this.takeValue);
  }
}
