import { Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  { path: 'password-strength', component: PasswordComponent },
  { path: '', component: AppComponent }
];
