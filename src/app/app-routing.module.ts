import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncsComponent } from './components/syncs/syncs.component';
import { LandingComponent } from './components/landing/landing.component';

const routes: Routes = [
  {
    component: LandingComponent, 
    path: ''
  },
  {
    component: LandingComponent, 
    path: 'landing'
  },
  {
    component: SyncsComponent, 
    path: 'syncs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
