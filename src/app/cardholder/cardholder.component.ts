import { Component, Input } from '@angular/core';
import { AddbuttonComponent } from '../addbutton/addbutton.component';

@Component({
  selector: 'app-cardholder',
  standalone: true,
  imports: [AddbuttonComponent],
  templateUrl: './cardholder.component.html',
  styleUrl: './cardholder.component.css'
})
export class CardholderComponent {
  @Input() imageSrc: string = '';
  @Input() cate: string = '';
  @Input() maker: string = '';
  @Input() pn: string = '';
}
