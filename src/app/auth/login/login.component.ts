import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }
  email;
  password;

  token;

  ngOnInit() {
  }

  Submit() {
    const loginData = [this.email, this.password];

    this.Auth.Login(loginData)
      .subscribe(
        (response: Response) => {
          this.token = response;
          localStorage.setItem('access_token', this.token.success.token);
          this.router.navigate(['admin']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
