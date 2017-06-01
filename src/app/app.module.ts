import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { AboutComponent } from './profile/about/about.component';
import { ProfileHomeComponent } from './profile/profile-home/profile-home.component';
import { routes } from './app.routing' ;

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdvantagesComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProfileModule,
    RouterModule,
    ReactiveFormsModule,
    routes,
    HttpModule
  ],
  exports : [ LoginComponent , ProfileComponent , ProfileHomeComponent ] ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
