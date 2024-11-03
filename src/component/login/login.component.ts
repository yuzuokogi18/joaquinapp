import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('#nombre') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    const role = this.authService.login(username, password);

    if (role === 'admin') {
      alert('Login exitoso como administrador');
      this.router.navigate(['/adminis']);
    } else if (role === 'user') {
      alert('Login exitoso como usuario');
      this.router.navigate(['user']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}


