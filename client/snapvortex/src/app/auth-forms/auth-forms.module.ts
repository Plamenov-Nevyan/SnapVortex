import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent
  ]
})
export class AuthFormsModule { }
