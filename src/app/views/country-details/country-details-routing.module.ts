import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDetailsComponent } from './country-details.component';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailsComponent,
    data: {
      title: 'Country Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailsRoutingModule {}
