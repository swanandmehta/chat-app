import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { SharedModule } from '../shared/shared.module';
import { LoginActionComponent } from './component/login-action/login-action.component';


@NgModule({
  declarations: [
    LoginHomeComponent,
    LoginActionComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
