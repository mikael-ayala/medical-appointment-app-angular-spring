import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  login: Login;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.login = new Login();
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.authService.login(this.login).subscribe(result => this.returnToHome())
  }

  returnToHome() {
    this.router.navigate(['']);
  }
}
