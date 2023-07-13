import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalInteractionsService {
  private action:string = ''
  private showModalDialog: boolean = false

  get showModalGet(): boolean { return this.showModalDialog}
  set showModalSet(val:boolean){
    this.showModalDialog = val
  }

  get actionGet():string{return this.action}
  set actionSet(val:string){
    this.action = val
  }

  constructor() { }

  onCloseModal(){
    this.showModalSet = false
    this.actionSet = ''
  }

  onShowModal(action:string){
    this.showModalSet = true
    this.actionSet = action
  }

}
