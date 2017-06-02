import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {
  myMessage: FormGroup;
  fb: FormBuilder;
  constructor(fb: FormBuilder, private router: Router, private _profileService: ProfileService) {
    this.myMessage = fb.group({
      message: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }
  ngOnInit() {
  }

  submit(value: any) {
    console.log(value);
    this._profileService.change(value.message);
    this.myMessage.reset();
  }
}
