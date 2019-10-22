import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageListComponent } from './language-list.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageListComponent,
    data: {
      title: 'Language List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageListRoutingModule {}
