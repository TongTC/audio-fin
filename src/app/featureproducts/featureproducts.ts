import { Component } from '@angular/core';
import { CardholderComponent } from '../cardholder/cardholder.component';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-featureproducts',
  imports: [CardholderComponent],
  templateUrl: './featureproducts.html',
  styleUrl: './featureproducts.scss',
})
export class Featureproducts {

  featuredProducts: Product[] = [
    {
      id: '1',
      pn: 'TRIODE 300B',
      price: '1,800',
      cate: 'tube',
      mfg: 'Electro-Harmonix',
      img: { src: '/assets/300b_electro.png', alt: 's' }
    },
    {
      id: '2',
      pn: '12AX7/ECC83s',
      cate: 'tip',
      price: '1,800',
      mfg: 'JJ',
      img: { src: '/assets/JJ-12AX7.jpg', alt: 's' }
    },
    {
      id: '3',
      pn: '0.1uF',
      cate: 'top',
      price: '1,400/pair',
      mfg: 'Jensen',
      img: { src: '/assets/jensen_cap01u.jpg', alt: 's' }
    },
    {
      id: '4',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
  ];

  trackById(index: number, item: Product) {
    return item.id;
  }
}
