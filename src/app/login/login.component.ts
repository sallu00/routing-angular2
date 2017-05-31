import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  fb: FormBuilder;
  constructor( fb: FormBuilder , private router: Router) {
    this.myForm = fb.group( {
      username : ['', [Validators.required , Validators.pattern('[a-zA-Z ]*') , Validators.maxLength(8)] ] ,
      password : ['' , [Validators.required , Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')] ]
    });
  }

  ngOnInit() {
  }

  submit(value: any) {
    localStorage.setItem('username' , value.username);
    const user = localStorage.getItem('username');
    const pass = localStorage.getItem('username');
    this.router.navigate(['/login' , user]);
    console.log(user);
    this.myForm.reset(); // reset the form to its default values
  }

}
