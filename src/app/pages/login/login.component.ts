import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignUp: boolean = false;

  signIn(): void {
    this.isSignUp = false;
  }

  signUp(): void {
    this.isSignUp = true;
  }

  toggleSignUp(): void {
    this.isSignUp = !this.isSignUp;
  }
  backgroundImagePath = '../../../assets/images.jpg';
}
