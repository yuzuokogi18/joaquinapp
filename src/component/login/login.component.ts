import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onUsernameInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.username = target.value;
  }

  onPasswordInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.password = target.value;
  }

  onSubmit(event: Event): void {
    event.preventDefault();  

    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login exitoso como administrador');
      this.router.navigate(['/adminis']);
    } else if (this.username === 'user' && this.password === 'user') {
      alert('Login exitoso como usuario');
      this.router.navigate(['user']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}


