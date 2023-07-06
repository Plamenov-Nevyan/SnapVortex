import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css', './modal-dialog-tac.component.css']
})
export class ModalDialogComponent {
 @Input() action: string = ''
 @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(){ }

  onCloseModal(){
    this.closeModal.emit(true)
  }

  onShowTac(){
    this.action = 'view-tac'
  }

  onBackToForm(){
    this.action = 'register'
  }
}
