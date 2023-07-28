import { Component } from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';
import { ModalInteractionsService } from './modal-interactions.service';
import { ImgCropperData } from './types/FileProps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get showModal(): boolean{return this.modalInteractions.showModalGet}
  get action(): string {return this.modalInteractions.actionGet}
  get imgCropperData(): ImgCropperData {return this.modalInteractions.imgCropperDataGet}
 

  constructor(private modalInteractions: ModalInteractionsService){  console.log(this.action)}
}
