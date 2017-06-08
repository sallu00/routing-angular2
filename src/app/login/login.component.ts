import { Component, OnInit } from '@angular/core';
import { FormBuilder  , FormGroup , ReactiveFormsModule , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../profile/profileAuth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  fb: FormBuilder;
  constructor( fb: FormBuilder , private router: Router , private authService: AuthService) {
    this.myForm = fb.group( {
      username : ['', [Validators.required , Validators.pattern('[a-zA-Z ]*') , Validators.maxLength(8)] ] ,
      password : ['' , [Validators.required /*, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}') */] ]
    });
  }

  ngOnInit() {
  }

  submit(value: any) {
    if(this.authService.login(value.username , value.password)){
      this.router.navigate(['/login' , value.username]);
    }
    else
    {
      alert('invalid credentials');
    }
    this.myForm.reset();
    // reset the form to its default values
  }
}
