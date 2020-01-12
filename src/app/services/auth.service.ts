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
