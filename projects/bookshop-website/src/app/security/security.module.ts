import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogOutComponent],
  imports: [
    CommonModule,
    FormsModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }
