import { Component, input } from '@angular/core';

@Component({
  selector: 'app-places-container',
  standalone: true,
  imports: [],
  templateUrl: './lists-container.component.html',
  styleUrl: './lists-container.component.css'
})
export class ListsContainerComponent {
  title = input.required<string>();
}
