import { Component, Input } from '@angular/core';
import { Counter } from '../counter/counter';
import { Product } from '../model/product.model';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cardholder',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cardholder.component.html',
  styleUrl: './cardholder.component.css'
})
export class CardholderComponent {
  @Input() product:Product = { };
}
