import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor( private _profileService: ProfileService ) {}
  ngOnInit() {}
}
