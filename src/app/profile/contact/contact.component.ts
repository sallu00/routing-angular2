import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: FormGroup;
  fb: FormBuilder;
  constructor(fb: FormBuilder) {
    this.contact = fb.group({
      contact: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
