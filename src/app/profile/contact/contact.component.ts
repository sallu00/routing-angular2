import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Http , Response } from '@angular/http' ;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contact1: FormGroup;
  fb: FormBuilder;
  userData: object;
  constructor(fb: FormBuilder , public http: Http) {
    this.contact1 = fb.group({
      contact: [ '', Validators.required ]
    });
  }
  makeRequest(){
    this.http.request('http://jsonplaceholder.typicode.com/posts/5')
    .subscribe((res : Response) => { 
      this.userData=res.json();
    })
  }
  ngOnInit() {
  }

}
