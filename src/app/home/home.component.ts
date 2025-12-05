import { Component } from '@angular/core';
import { CardholderComponent } from '../cardholder/cardholder.component';
import { Featureproducts } from '../featureproducts/featureproducts';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Featureproducts],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 // test comment github

 
}
