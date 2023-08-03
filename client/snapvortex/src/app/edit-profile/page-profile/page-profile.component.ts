import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { CreateService } from 'src/app/create-section/create.service';
import { CreatePageData } from 'src/app/types/CreatePage';
import { pageInitValues } from 'src/app/types/typesInitValues';
import { PageEditData, PageEditDataFiltered } from 'src/app/types/Page';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent {
  @Input() editFormToShow: string = ''
  get currentPrivacy(): boolean {return this.createServices.currentGroupDataGet.isPrivate}
  
  editData:CreatePageData = {
    name: '',
    description: '',
    address: '',
    city: '',
    country: ''
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

  onFormDataChange(event:PageEditData ){
    this.editData = {
      ...this.editData,
      [event.name] : event.value
    }
  }
  onEdit(){
    if(this.editData.city && this.editData.country){
      this.editData.address = this.editData.city + ', ' + this.editData.country 
    }
    Reflect.deleteProperty(this.editData, 'city')
    Reflect.deleteProperty(this.editData, 'country')
    let filteredData: PageEditDataFiltered = Object.fromEntries(Object.entries(this.editData).filter(
      ([_, v]) => v != '')
      )
    this.createServices.editPage(filteredData)

    this.modalInteraction.onCloseModal()
  }
}
