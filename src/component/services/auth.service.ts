
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'adminis', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  login(username: string, password: string): string {
    const user = this.users.find(u => u.username === username && u.password === password);
    return user ? user.role : 'invalid';
  }

  register(username: string, email: string, password: string): string {
    const existingUser = this.users.find(u => u.username === username);
    if (existingUser) {
      return 'usernameExists'; 
    }
    this.users.push({ username, password, role: 'user' });
    return 'success'; 
  }
}
