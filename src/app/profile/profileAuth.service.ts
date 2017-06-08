import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
@Injectable() // may need to inject other dependencies in this service also

export class AuthService {
    message: string;
    user: string;
    pass: string;
    myForm: any;
    constructor( private router:Router ){
        this.message='';
        this.user='';
        this.pass='';  
    }
    ngOnInit(){
        
    }
    login(username: string , password: string): Boolean{
        if(localStorage.getItem('myForm')!=null){
            this.myForm=JSON.parse(localStorage.getItem('myForm'));
            this.user=this.myForm.username;
            this.pass=this.myForm.password;
        }
        if(username==this.user && password==this.pass){
            alert('welcome');
            return true;
        }
        return false;
    }
    logout(){
        localStorage.removeItem('myForm');
        this.router.navigate(['/home']);
    }
    getUser(){
            this.myForm=JSON.parse(localStorage.getItem('myForm'));
            this.user=this.myForm;
            return this.user;
        }
        
    isLoggedIn(){
        return this.getUser() !==null;
    }
}