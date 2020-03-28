import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //email : string ='test@test.com';
user:User ={
  email :'',password :''
};
  constructor(private Authservice: AuthService,private router :Router) { }

  ngOnInit() {
  }


  register(form : NgForm){
    console.log('register...');
    console.log('form.value',form.value);
    console.log('user',this.user);

    if(form.valid){
       this.Authservice.register(this.user).subscribe(()=>{
         console.log(this.user);
         console.log('redirecting to login')
         //this.router.navigateByUrl('/login');
         this.router.navigate(['login']);
       })
    };
  }

}
