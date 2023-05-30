import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncsComponent } from './components/syncs/syncs.component';
import { LandingComponent } from './components/landing/landing.component';
import { PostLoginComponent } from './components/post-login/post-login.component';

const routes: Routes = [
  // {
  //   component: LandingComponent, 
  //   path: ''
  // },
  {
    component: PostLoginComponent, 
    path: 'post-login'
  }
  //,
  // {
  //   component: LandingComponent, 
  //   path: ''
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
