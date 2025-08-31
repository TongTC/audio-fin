import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardholder',
  standalone: true,
  imports: [],
  templateUrl: './cardholder.component.html',
  styleUrl: './cardholder.component.css'
})
export class CardholderComponent {
  @Input() imageSrc: string = '';
  @Input() cate: string = '';
  @Input() maker: string = '';
  @Input() pn: string = '';
}
