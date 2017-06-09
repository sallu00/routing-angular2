import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Http , Response } from '@angular/http' ;
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contact1: FormGroup;
  fb: FormBuilder;
  userData: any;
  users: object;
  constructor(fb: FormBuilder , public http: Http , private route: ActivatedRoute) {
    this.contact1 = fb.group({
      contact: [ '', Validators.required ]
    });
  }
  ngOnInit():void {
    
  }
  makeRequest(){
    this.http.get('/assets/jsonData/users.json')
    .subscribe((res : Response) => { 
      this.userData=res.json();
      console.log(this.userData[0].firstName);
    })
  }
  

}
