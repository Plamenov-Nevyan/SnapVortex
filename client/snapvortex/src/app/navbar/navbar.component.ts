import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbarAuthorized.component.css']
})
export class NavbarComponent {

  @Input() authorized: boolean = false
  @Input() showProfOptions: boolean = false
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(){}

  onShowModal(event: MouseEvent){
    event.preventDefault()
    this.showModal.emit(true)
  }
}
