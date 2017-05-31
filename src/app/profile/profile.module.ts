import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NavbarProfileComponent } from './navbar-profile/navbar-profile.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';


@NgModule({
  declarations: [
    NavbarProfileComponent,
    AboutComponent,
    ContactComponent,
    ProfileHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports : [ NavbarProfileComponent , AboutComponent , ProfileHomeComponent ],
  providers: [] 
})
export class ProfileModule { }
