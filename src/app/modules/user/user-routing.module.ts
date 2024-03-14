// user-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilersComponent } from './components/profiler/profiler.component'; 

const routes: Routes = [
  { path: '', component: ProfilersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
