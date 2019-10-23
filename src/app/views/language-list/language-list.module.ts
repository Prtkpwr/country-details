import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { LanguageListComponent } from './language-list.component';
import { LanguageListRoutingModule } from './language-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LanguageListRoutingModule,
    ChartsModule
  ],
  declarations: [ LanguageListComponent ]
})
export class LanguageListModule { }
