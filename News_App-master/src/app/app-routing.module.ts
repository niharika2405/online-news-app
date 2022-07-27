import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegComponent } from './reg/reg.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:"reg",component:RegComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotpass",component:ForgotpassComponent},
  {path:"reset",component:ResetComponent},
  {path:"news/:emailId",component:NewsComponent},
  {path:"news/:emailId/updateProfile",component:UpdateProfileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
