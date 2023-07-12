import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Session } from 'src/app/types/Session';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  @Output() showTac: EventEmitter<boolean> = new EventEmitter<boolean>() 
  tacChecked: boolean = false
  showErrorForTac:boolean = false
  showPassword: boolean = false

  formData = {
    username: '',
    email: '',
    password: '',
    confPassword: ''
  }

  constructor(private authServices: AuthServicesService, private sessionServices: SessionStorageService, private router: Router ){}

  onCheckTac(){
    if(this.tacChecked){
      this.tacChecked = false
    }else if(!this.tacChecked){
      this.tacChecked = true
      this.showErrorForTac = false
    }
  }

  onClickDisabledBtn(event: MouseEvent){
    event.preventDefault()
    this.showErrorForTac = true
  }

  onShowTac(){
    this.showTac.emit(true)
  }

  onShowPassword(){
    this.showPassword ? this.showPassword = false : this.showPassword = true
  }

  onRegister(event: MouseEvent){
    event.preventDefault()
    if(this.formData.password !== this.formData.confPassword){return}
      this.authServices.registerUser(this.formData).subscribe({
        next: (session) => {
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
