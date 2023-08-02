import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { CreateService } from 'src/app/create-section/create.service';
import { GroupEditData } from 'src/app/types/Group';
import { CreateGroupData } from 'src/app/types/CreateGroup';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.css']
})
export class GroupProfileComponent {
  @Input() editFormToShow: string = ''
  get currentPrivacy(): boolean {return this.createServices.currentGroupDataGet.isPrivate}
  
  editData:CreateGroupData = {
      description: '',
      rules: [],
      rule: '',
      isPrivate: this.currentPrivacy ,
      name: ''
  }

  previewImageUrl: string = ''

  constructor(private modalInteraction: ModalInteractionsService, private createServices: CreateService){

  }

  onChooseForm(event: MouseEvent){
      if(event.target instanceof HTMLLIElement){
        this.editFormToShow = event.target.id
      }
  }

  onCancelEdit(){
    this.modalInteraction.onCloseModal()
  }

  onFormDataChange(event:GroupEditData ){
    this.editData = {
      ...this.editData,
      [event.name] : event.value
    }
  }
  onEdit(){
    Reflect.deleteProperty(this.editData, 'rule')
    this.createServices.editGroup(this.editData)

    this.modalInteraction.onCloseModal()
  }
  onAddRule(event: string){
    this.editData.rules.push(event)
  }
  onRemoveRule(event: string){
    this.editData.rules = this.editData.rules.filter(rule => rule !== event)
  }
}
