import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Generation1Component } from './components/generation1/generation1.component';
import { Generation2Component } from './components/generation2/generation2.component';
import { Generation3Component } from './components/generation3/generation3.component';
import { Generation4Component } from './components/generation4/generation4.component';
import { Generation5Component } from './components/generation5/generation5.component';
import { Generation6Component } from './components/generation6/generation6.component';
import { Generation7Component } from './components/generation7/generation7.component';
import { Generation8Component } from './components/generation8/generation8.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/generation1',
    pathMatch: 'full'
  },
  {
    path: 'generation1',
    component: Generation1Component
  },
  {
    path: 'generation2',
    component: Generation2Component
  },
  {
    path: 'generation3',
    component: Generation3Component
  },
  {
    path: 'generation4',
    component: Generation4Component
  },
  {
    path: 'generation5',
    component: Generation5Component
  },
  {
    path: 'generation6',
    component: Generation6Component
  },
  {
    path: 'generation7',
    component: Generation7Component
  },
  {
    path: 'generation8',
    component: Generation8Component
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
