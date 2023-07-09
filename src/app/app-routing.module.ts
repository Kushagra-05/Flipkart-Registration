import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroDetailsComponent } from './intro-details/intro-details.component';


const routes: Routes = [
  { path: '', component: IntroDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
