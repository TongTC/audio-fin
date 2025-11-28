import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-addbutton',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatDividerModule],
  templateUrl: './addbutton.component.html',
  styleUrl: './addbutton.component.css'
})
export class AddbuttonComponent {

}
