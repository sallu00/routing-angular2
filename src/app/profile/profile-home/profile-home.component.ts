import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {
  public message : string="GOOD MORNING";
  public username: string;
  constructor( private route: ActivatedRoute ) { }
  ngOnInit() {
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern ;
  }
}