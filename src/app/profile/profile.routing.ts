import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { ProfileResolver } from './profile.resolver';

export const PROFILE_ROUTES: Routes = [
    { path: '', component: ProfileHomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'search',
        component: SearchComponent,
        resolve : {
            users: ProfileResolver
        }
    }
];

export const profile_routes: ModuleWithProviders = RouterModule.forChild(PROFILE_ROUTES);
