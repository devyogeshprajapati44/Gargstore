import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserregistrationComponent } from './component/Registration/user-registration';
import { UserLoginComponent } from './component/userlogine';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:UserLoginComponent},
  {path:"registration",component:UserregistrationComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
