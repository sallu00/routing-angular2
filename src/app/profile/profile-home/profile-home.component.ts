import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../profile-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  public message : string='Good Morning';
  public username: string;
  subscription: Subscription;
  takeValue: string;
  childSubject: Subject<any>=new Subject();
  constructor( private route: ActivatedRoute, private _profileService: ProfileService) { 
    this.subscription=this._profileService.notificationReceived.subscribe(
      (message) => {
        this.message=message;
      }
    )
  }
  
  ngOnInit() {
    //this.message=this._profileService.getvalue();
    //console.log(this.message);
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern;
  }
  submit(valu){
    //this.takeValue=valu.val;
    this.childSubject.next(valu.val);
    //this._profileService.notify(this.takeValue);
    //console.log(this.takeValue);
  }
}
