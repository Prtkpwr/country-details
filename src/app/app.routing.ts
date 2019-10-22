import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'country-details',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'currency-list',
        loadChildren: () => import('./views/currency-list/currency-list.module').then(m => m.CurrencyListModule)
      },
      {
        path: 'language-list',
        loadChildren: () => import('./views/language-list/language-list.module').then(m => m.LanguageListModule)
      },
      {
        path: 'country-details',
        loadChildren: () => import('./views/country-details/country-details.module').then(m => m.CountryDetailsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
