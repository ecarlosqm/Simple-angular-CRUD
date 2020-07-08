import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PrivateComponent } from './private/private.component';
import { ProfileBtnComponent } from './profile-btn/profile-btn.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SamePasswordDirective } from './directives/same-password.directive';
import { ProductLIstComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrivateComponent,
    ProfileBtnComponent,
    ProductFormComponent,
    RegisterFormComponent,
    SamePasswordDirective,
    ProductLIstComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
