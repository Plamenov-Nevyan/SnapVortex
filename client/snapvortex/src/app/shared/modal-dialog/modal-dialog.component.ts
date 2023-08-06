import { Component, Input} from '@angular/core';
import { ImageCropperService } from 'src/app/image-cropper.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { ImgCropperData } from 'src/app/types/FileProps';
import { ImgCropperDataInitVals } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css', './modal-dialog-tac.component.css']
})
export class ModalDialogComponent {
 @Input() action: string = ''
 @Input() imgCropperData: ImgCropperData = ImgCropperDataInitVals
 
  constructor(private modalInteraction:ModalInteractionsService){}

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