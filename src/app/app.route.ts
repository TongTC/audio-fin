import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvailableStocksComponent } from './stocks/available-stocks/available-stocks.component';
import { ProductsdetailComponent } from './productsdetail/productsdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllStockComponent } from './stock/allstock.component';
import { ContactusComponent } from './contactus/contactus.component';


export const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactusComponent},
  {path:'stock',component:AllStockComponent ,
      
     children:[
      {
         path:'',
          component:AvailableStocksComponent
       },

      { 
         path:'details/:grp/:stockId',
         component:ProductsdetailComponent
      }
     ] 
       
  },
  
  {path:'',component:HomeComponent},
   {path:'**',component:NotfoundComponent}
];
   //test
