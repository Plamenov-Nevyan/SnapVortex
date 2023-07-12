import { Component } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  showPassword: boolean = false

  formData = {
    username: '',
    email: '',
    password: '',
  }

  constructor(private authServices: AuthServicesService, private sessionServices: SessionStorageService, private router: Router){}

  onShowPassword(){
    this.showPassword ? this.showPassword = false : this.showPassword = true
  }
  onLogin(event: MouseEvent){
    event.preventDefault()
      this.authServices.loginUser(this.formData).subscribe({
        next: (session) => {
          console.log(session)
          this.sessionServices.addToStorage(session)
        },
        error:(errMessage) => {
          console.log(errMessage)
        },
        complete: () => {
          this.router.navigate(['/posts'])
        }
      })
  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.formData = {
        ...this.formData,
        [event.target.name] : event.target.value
      }
    }
  }

}
