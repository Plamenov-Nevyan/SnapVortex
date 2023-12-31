import { Component,Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'src/app/session-storage.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

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
    confPassword: '',
    gender: ''
  }

  constructor(private modalInteraction: ModalInteractionsService, private authServices: AuthServicesService, private sessionServices: SessionStorageService, private router: Router ){}

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
    Reflect.deleteProperty(this.formData, 'confPassword')
      this.authServices.registerUser(this.formData).subscribe({
        next: (session) => {
          this.sessionServices.addToStorage(session)
          this.authServices.setUserOnline(session.id)
        },
        error:(errMessage) => {
          console.log(errMessage)
        },
        complete: () => {
          this.modalInteraction.onCloseModal()
          this.router.navigate(['/posts'])
        }
      })
  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.formData = {
        ...this.formData,
        [event.target.name] : event.target.type === 'radio' ? event.target.id : event.target.value
      }
    }
  }
}
