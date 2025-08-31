import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-contactus',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {


  formData = {
    email: '',
    message: ''
  };

  submitForm() {
    // You need to implement email sending here (e.g., via backend API or EmailJS)
    alert(`Email: ${this.formData.email}\nMessage: ${this.formData.message}`);
    // Reset form
    this.formData = { email: '', message: '' };
  }



}
