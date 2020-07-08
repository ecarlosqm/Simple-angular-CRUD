import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserCredential } from '@firebase/auth-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent {

  user: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private auth: AngularFireAuth, private router:Router) {

  }

  submitted = false;

  onSubmit() {
    this.login(this.user, this.password);
  }

  async login(email: string, password: string) {
    try {
      this.loading = true;
      const response: UserCredential = await this.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
    } catch (error) {
      this.loading = false;
      switch (error['code']) {
        default:
          this.error = "El usuario o contrasena son incorrectos";
          break;
      }
    }
  }

}
