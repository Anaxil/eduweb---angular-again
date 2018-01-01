import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';


@Injectable()
export class AuthService {

  constructor(private baseOptions: RequestOptions) { }

  getToken() {
    let token = localStorage.getItem('token');

    if (!token) {
      const match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
      localStorage.setItem('token', token);
    }

    if (!token) {
      this.authrorize();
    }

    this.baseOptions.headers.set('Authorization', 'Bearer ' + token);

    return token;
  }

  authrorize() {
    localStorage.removeItem('token');
    window.location.replace('https://accounts.spotify.com/authorize?client_id=d8ab9a0595b4412c9ecd584e9dce2f8e&response_type=token&redirect_uri=http:%2F%2Flocalhost:4200%2F');
  }

}
