import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from './component/login-home/login-home.component'

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: LoginHomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
