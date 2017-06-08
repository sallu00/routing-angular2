import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { AuthService } from '../profileAuth.service';
@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {
  username: string;
  name_user: any;
  constructor( private router: Router, private authService: AuthService , private route: ActivatedRoute ) { 
  }
  ngOnInit() {
    this.name_user=JSON.parse(localStorage.getItem('myForm'));
    console.log(this.name_user);
    const usern: any = this.route.snapshot.params['user'];
    this.username = usern ;
  }
  logout() {
      this.authService.logout();
      return false;
  }

}
