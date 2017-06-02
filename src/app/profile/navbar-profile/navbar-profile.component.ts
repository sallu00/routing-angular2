import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {
  username: string;
  constructor( private router: Router,
  private route: ActivatedRoute ) { }
  ngOnInit() {
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern ;
  }
  logout() {
      this.router.navigate(['home']);
  }

}
