import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
  providers: [ProfileService]
})
export class ProfileHomeComponent implements OnInit {
  public message = 'Good morning';
  public username: string;
  subscription: Subscription;
  constructor(private route: ActivatedRoute, private _profileService: ProfileService) { }
  ngOnInit() {
    this._profileService.dataString$.subscribe(
      data => {
        this.message = data;
      });
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern;
  }
}
