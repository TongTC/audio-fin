import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvailableStocksComponent } from './stocks/available-stocks/available-stocks.component';
import { ProductsdetailComponent } from './productsdetail/productsdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'allstock',component:AvailableStocksComponent},
  {path:'details',component:ProductsdetailComponent,
     children:[
       {
         path:'show',
         component:Detai
       }
     ]
  },
  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];
//test
