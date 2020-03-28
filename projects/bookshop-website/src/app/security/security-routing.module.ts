import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {LogOutComponent} from './log-out/log-out.component';


const routes: Routes = [
{path : 'register', component : RegisterComponent},
{path : 'login',component : LoginComponent},
{path : 'logout',component : LogOutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
