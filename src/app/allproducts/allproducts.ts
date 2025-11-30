import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { CardholderComponent } from '../cardholder/cardholder.component';

@Component({
  selector: 'app-allproducts',
  imports: [CardholderComponent],
  templateUrl: './allproducts.html',
  styleUrl: './allproducts.scss',
})
export class Allproducts {
  allproducts:Product[]=[
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
        {
      id: '5',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
        {
      id: '6',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
        {
      id: '7',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
        {
      id: '8',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
            {
      id: '9',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
                {
      id: '10',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
    {
          id: '11',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
      {
          id: '12',
      pn: '12AX7',
      cate: 'tap',
      price: '1,800',
      mfg: 'Tung-Sol',
      img: { src: '/assets/12ax7.webp', alt: 's' }
    },
  ];
}
