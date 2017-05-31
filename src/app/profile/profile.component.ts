import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  flag = false;
  public username: string;
  constructor( private route: ActivatedRoute ) { }
  ngOnInit() {
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern ;
  }
}
