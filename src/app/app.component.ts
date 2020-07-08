import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import * as firebase from 'firebase'
import 'firebase/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { RequiredValidator } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  d(){
    RequiredValidator

  }
}
