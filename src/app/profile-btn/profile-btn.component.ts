import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@firebase/auth-types';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-btn',
  templateUrl: './profile-btn.component.html',
  styleUrls: ['./profile-btn.component.less']
})
export class ProfileBtnComponent implements OnInit {

  shouldShowThisButton: boolean = false;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.auth.onAuthStateChanged((user: User) => {
      if (user != null) {
        this.shouldShowThisButton = true;
      } else {
        this.shouldShowThisButton = false;
      }
    });
  }

  async logout() {
    try {
      await this.auth.signOut();
      this.router.navigate(['login'])
    } catch (error) {

    }
  }

}
