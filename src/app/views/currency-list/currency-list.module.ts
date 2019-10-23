import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CurrencyListComponent } from './currency-list.component';


// Buttons Routing
import { CurrencyListRoutingModule } from './currency-list-routing.module';

// Angular

@NgModule({
  imports: [
    CommonModule,
    CurrencyListRoutingModule,
    FormsModule
  ],
  declarations: [
    CurrencyListComponent
  ]
})
export class CurrencyListModule { }
