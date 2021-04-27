import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './component/landing-home/landing-home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: LandingHomeComponent,
  },
  {
    path: "login",
    pathMatch: "full",
    loadChildren: () => import("../login/login.module").then(m => m.LoginModule)
  },
  {
    path: "register",
    pathMatch: "full",
    loadChildren: () => import("../register/register.module").then(m => m.RegisterModule)
  },
  {
    path: "dashboard",
    pathMatch: "full",
    loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
