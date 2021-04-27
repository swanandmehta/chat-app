import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterHomeComponent } from './component/register-home/register-home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: RegisterHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
