import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    ClarityModule,
  ],
  exports:[ClarityModule, ReactiveFormsModule]
})
export class SharedModule { }
