import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../models/user-profile';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  userProfile : UserProfile;
  constructor(private authService :AuthService,private router :Router) {


   }

  ngOnInit() {
    this.authService.getCurrentUserProfile().subscribe(
      userProfile => {
        this.userProfile = userProfile; 
      }
    );
  }


  logOut(){
    this.authService.logout();
    this.router.navigate(['/']);
  };

}
