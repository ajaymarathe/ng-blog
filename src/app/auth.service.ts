import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Login(loginData) {
     return this.http.post('http://localhost:8000/api/login', {
       email: loginData[0],
       password: loginData[1]
     });
  }

  // register user
  Register(registerData) {
    return this.http.post('http://localhost:8000/api/register', {
      name: registerData[0],
      email: registerData[1],
      password: registerData[2],
      c_password: registerData[3],
    });
  }
}
