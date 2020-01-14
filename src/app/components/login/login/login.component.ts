import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              public matSnackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.validateForm();
  }

  validateForm() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      password: this.formBuilder.control('', [Validators.required]),
    });
  }

  login() {
    if ( this.loginForm.get('email').value === user.email && this.loginForm.get('password').value === user.password ) {
      this.authService.login();
      this.router.navigateByUrl('/dragons');
    } else {
      this.authService.logout();
      this.snackOpen('Email or password invalid', 'Close');
    }
  }

  snackOpen(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 2000,
      panelClass: ['alert-snackbar']
    });
  }
}
