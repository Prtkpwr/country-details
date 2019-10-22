import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailsRoutingModule } from './country-details-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CountryDetailsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ CountryDetailsComponent ]
})
export class CountryDetailsModule { }
