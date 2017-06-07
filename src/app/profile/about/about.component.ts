import { Component , OnInit , Output , Input , EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProfileService } from '../profile-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myMessage: FormGroup;
  fb: FormBuilder;
  val : any;
  @Input() parentSubject: Subject<any> = new Subject();
  ngOnInit() {
    this.parentSubject.subscribe(
      (message) => {
        this.parentSubject=message;
        this.val=this.parentSubject;
      }
    )
  }
  subscription: Subscription;
  constructor(fb: FormBuilder, private router: Router, private _profileService: ProfileService) {
    this.myMessage = fb.group({
      message: ['', [Validators.required, Validators.maxLength(30)]]
    });
    
    /*this.subscription=this._profileService.notificationReceived.subscribe(
      (message) => {
        this.value=message;
      }
    )*/
    
  }
  /*ngOnChanges() {
   if(this.value){         
        this.val=this.value;
        this._profileService.notify(this.val);
                
   }
 }
  */
  
  submit(value: any) {
    //console.log(value);
    //this._profileService.change(value.message);
    this._profileService.notify(value.message);
    console.log(value.message);
    this.myMessage.reset();
  }
}
