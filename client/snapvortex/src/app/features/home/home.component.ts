import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() showModal: boolean = false
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(){ }

  onCloseModal(){
    this.closeModal.emit(true)
    this.showModal = false
  }
}
