import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { CardholderComponent } from '../cardholder/cardholder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage,CardholderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
