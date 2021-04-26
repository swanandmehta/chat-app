import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LandingHomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    LandingRoutingModule
  ],
  bootstrap: [LandingHomeComponent]
})
export class LandingModule { }
