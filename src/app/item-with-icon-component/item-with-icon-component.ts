import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-with-icon-component',
  imports: [],
  templateUrl: './item-with-icon-component.html',
  styleUrl: './item-with-icon-component.scss',
})
export class ItemWithIconComponent {
    @Input() item: any;
}
