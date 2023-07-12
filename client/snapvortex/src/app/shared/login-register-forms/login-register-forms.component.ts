import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-register-forms',
  templateUrl: './login-register-forms.component.html',
  styleUrls: ['./login-register-forms.component.css']
})
export class LoginRegisterFormsComponent {
 @Input() authAction: string = ''
 @Output() showTac: EventEmitter<boolean> = new EventEmitter<boolean>() 
  activeAction: string = 'register'
  tacChecked: boolean = false
  showErrorForTac:boolean = false
  showPassword: boolean = false

  constructor(){ console.log(this.authAction)}

  onActionChange(event: string){
    this.authAction = event
    this.activeAction = event
  }

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

}
