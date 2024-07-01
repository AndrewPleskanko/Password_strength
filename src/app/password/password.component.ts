import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {

  password: string = '';

  getPasswordStrength(): string {
    if (this.password.length === 0) {
      return 'empty';
    } else if (this.password.length < 8) {
      return 'easy';
    } else if (this.password.match(/[a-zA-Z]/) && this.password.match(/[0-9]/) && this.password.match(/[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/)) {
      return 'strong';
    } else {
      return 'medium';
    }
  }
}
