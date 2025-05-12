import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvailableStocksComponent } from './stocks/available-stocks/available-stocks.component';
import { ProductsdetailComponent } from './productsdetail/productsdetail.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'allstock',component:AvailableStocksComponent},
  {path:'detail',component:ProductsdetailComponent},
  {path:'',component:HomeComponent}
];
//test