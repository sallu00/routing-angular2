import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  public message : string;
  public username: string;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private _profileService: ProfileService) { }
  ngOnInit() {

    this.message=this._profileService.getvalue();
    console.log(this.message);
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern;
  }
}
