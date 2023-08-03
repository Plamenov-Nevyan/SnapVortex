import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { CreateService } from 'src/app/create-section/create.service';
import { GroupEditData, GroupEditDataFiltered } from 'src/app/types/Group';
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
    let filteredData: GroupEditDataFiltered = Object.fromEntries(Object.entries(this.editData).filter(
      ([_, v]) => v != '' || v.length > 0 || typeof v === 'boolean')
      )
    this.createServices.editGroup(filteredData)

    this.modalInteraction.onCloseModal()
  }
  onAddRule(event: string){
    this.editData.rules.push(event)
  }
  onRemoveRule(event: string){
    this.editData.rules = this.editData.rules.filter(rule => rule !== event)
  }
}
