import { Injectable } from '@angular/core';
import { user } from 'src/environments/environment';

const authToken = 'authenticated';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  getAuthentication(){
    const token = localStorage.getItem('token');
    return authToken === token;
  }

  login(email: string, password: string) {
    this.setToken();
    return { user: user.email, password: user.password}
  }

  setToken() {
    localStorage.setItem('token', authToken);
  }
}
