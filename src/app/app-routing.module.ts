import { AuthComponent } from './auth/auth.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
path: "profile",
component: ProfileComponent
},
{
  path: "login",
  component:AuthComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
