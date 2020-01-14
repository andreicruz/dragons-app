import { Injectable } from '@angular/core';

const authToken = 'authenticated';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  getAuthentication() {
    const token = localStorage.getItem('token');
    return authToken === token;
  }

  login() {
    this.setToken();
  }

  setToken() {
    localStorage.setItem('token', authToken);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
