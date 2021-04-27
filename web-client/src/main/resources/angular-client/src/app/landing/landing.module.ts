import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule }  from '@angular/common/http';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LandingRoutingModule,
    ToastrModule.forRoot(
      {
        autoDismiss: true,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }
    ),
    HttpClientModule
  ],
  bootstrap: [LandingHomeComponent]
})
export class LandingModule { }
