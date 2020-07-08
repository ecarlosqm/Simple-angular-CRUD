import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserCredential } from '@firebase/auth-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
})
export class RegisterFormComponent {

  email: string = '';
  password: string = '';
  passwordConfirm: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private auth: AngularFireAuth, private router: Router) {

  }

  onSubmit() {
    this.signin(this.email, this.password);
  }

  async signin(email: string, password: string) {
    try {
      this.loading = true;
      const response: UserCredential = await this.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
      this.loading = false;
      switch (error['code']) {
        default:
          this.error = "Parece que el usuario ya existe";
          break;
      }
    }
  }

}
