import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text: string = '';
  @Input() disabled: boolean = false;

  addItem() {
    // fixed added product
    const newItem: any = {
      icon: '🍌',
      productName: 'bananas',
      productId: '004',
      quantity: 1,
      price: 10,
    };}


}
