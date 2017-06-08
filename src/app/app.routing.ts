import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { loginGuard } from './profile/profile.guards';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './profile/about/about.component';
import { ContactComponent } from './profile/contact/contact.component';
import { ProfileHomeComponent } from './profile/profile-home/profile-home.component';


export const PROFILE_ROUTES: Routes = [
  { path: '', component: ProfileHomeComponent   },
  { path: 'about' , component: AboutComponent  },
  { path: 'contact' , component: ContactComponent}
];
export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
      path: 'login', children: [
        {path: '' , component: LoginComponent  },
        {
            path: ':user' ,
            component: ProfileComponent,
            children: PROFILE_ROUTES,
            canActivate: [loginGuard]
        }
  ]},
  { path: 'register', component: RegisterComponent/*, canActivate: [loginGuard] */},
  { path: '**', redirectTo: 'home' }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
