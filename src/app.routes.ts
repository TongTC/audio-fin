import { Routes } from '@angular/router';
//  import { DetailsComponent } from './details/details.component';
import { StocksComponent } from './app/stocks/stocks.component';
import { AboutusComponent } from './app/aboutus/aboutus.component';
import { AvailableStocksComponent } from './app/stocks/available-stocks/available-stocks.component';

export const routes: Routes = [
    
    {
        path: '',
        component: AvailableStocksComponent,
        title: 'Home page'
      },
      {
        path: 'allstock',
        component: AvailableStocksComponent,
        title: 'Home page'
      },
       {
        path: 'about',
         component: AboutusComponent,
         title: 'aboutus'
       }
];
