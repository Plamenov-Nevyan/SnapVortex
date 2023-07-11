import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  constructor(){}

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
