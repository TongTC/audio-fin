import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { AvailableStocksComponent } from './stocks/available-stocks/available-stocks.component';
import { ProductsdetailComponent } from './productsdetail/productsdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Productsholder } from './productsholder/productsholder';
import { Allproducts } from './allproducts/allproducts';
import { Cartproducts } from './cartproducts/cartproducts';


export const routes: Routes = [

  {path:'home',component:HomeComponent},
//   {path:'allproducts',component:Allproducts},
  {path:'contact',component:ContactusComponent},
  {path:'products',component:Productsholder ,
      
     children:[
      { 
         path:'',
         component:Allproducts
      },
      { 
         path:'details/:cate/:productId',
         component:ProductsdetailComponent
      }
     ] 
       
  },
  
  {path:'',component:HomeComponent},

  {path:'cartproducts',component:Cartproducts},
  
   {path:'**',component:NotfoundComponent}
];
   //test
