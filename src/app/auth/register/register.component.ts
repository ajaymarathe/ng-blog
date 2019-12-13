import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService,  private router: Router) { }

  name;
  email;
  password;
  c_password;

  token;

  ngOnInit() {
  }

  Submit() {
    const registerData = [this.name, this.email, this.password, this.c_password];

    this.Auth.Register(registerData)
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
