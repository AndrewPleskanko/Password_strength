import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: 'password-strength', component: PasswordComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    PasswordComponent
  ],
  bootstrap: []
})
export class AppModule { }
