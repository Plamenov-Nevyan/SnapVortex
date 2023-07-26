import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ImageCropperService } from 'src/app/image-cropper.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css', './modal-dialog-tac.component.css']
})
export class ModalDialogComponent {
 @Input() action: string = ''
 @Input() imgChangeEvent: any = ''
 @Input() uploadFor: string = ''
 @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>()
 
  constructor(private modalInteraction:ModalInteractionsService){console.log(this.action) }

  onCloseModal(){
    this.modalInteraction.onCloseModal()
  }

  onShowTac(){
    this.action = 'view-tac'
  }

  onBackToForm(){
    this.action = 'register'
  }
}