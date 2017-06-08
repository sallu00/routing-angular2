import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../profile/profileAuth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  fb: FormBuilder;
  constructor( fb: FormBuilder , private router: Router , private authService: AuthService) {
    this.myForm = fb.group( {
      name : [ '' , [Validators.required , Validators.pattern('[a-zA-Z ]*')]],
      username : ['', [Validators.required , Validators.pattern('[a-zA-Z ]*') , Validators.maxLength(8)] ] ,
      password : ['' , [Validators.required /*,Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')*/] ]
    });
  }

  ngOnInit() {
  }
  submit(value: any){
    localStorage.setItem('myForm',JSON.stringify(value));
    alert('registered');
    this.myForm.reset();
  }

}
