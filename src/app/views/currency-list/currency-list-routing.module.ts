import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencyListComponent } from './currency-list.component';

const routes: Routes = [
    {
      path: '',
      component: CurrencyListComponent,
      data: {
        title: 'Currency List'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyListRoutingModule {}
