import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './component/register-home/register-home.component';
import { RegisterActionComponent } from './component/register-action/register-action.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterHomeComponent,
    RegisterActionComponent
  ],
  imports: [
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
