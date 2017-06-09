import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { profile_routes } from './profile.routing';
import { FormComponent } from './form/form.component' ;
import { ProfileService } from './profile-service.service';
import { AuthService } from './profileAuth.service';
@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ProfileHomeComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    profile_routes,
    RouterModule ,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ ProfileService , AuthService ]
})
export class ProfileModule { }
