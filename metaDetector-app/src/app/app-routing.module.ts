import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestPageComponent} from './test-page/test-page.component';

const routes: Routes = [
  {path: 'test', component: TestPageComponent}, 
  {path: '', component: TestPageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
