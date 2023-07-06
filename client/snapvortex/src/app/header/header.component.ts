import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerAuthorized.component.css']
})
export class HeaderComponent {
 authorized: boolean = false
 showProfOptions: boolean = false
 showNotifications: boolean = false
 @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(){}

  onProfOptions(){
    this.showProfOptions ? this.showProfOptions = false : this.showProfOptions = true
  }
  onShowNotifications(){
    this.showNotifications ? this.showNotifications = false : this.showNotifications = true
  }

  onShowModal(event: boolean){
    console.log(event)
    this.showModal.emit(true)
  }
}
