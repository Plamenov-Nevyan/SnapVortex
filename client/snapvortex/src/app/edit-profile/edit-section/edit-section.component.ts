import { Component, Input } from '@angular/core';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { UserEditData } from 'src/app/types/User';
import { ProfileService } from 'src/app/features/profile.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.css']
})
export class EditSectionComponent {
  @Input() editFormToShow: string = ''
  editData = {
      description: '',
      city: '',
      country: '',
      companyName: '',
      position: '',
      url: '',
      preview: null
  }

  previewImageUrl: string = ''

  constructor(private modalInteraction: ModalInteractionsService, private profileServices: ProfileService){

  }

  onChooseForm(event: MouseEvent){
      if(event.target instanceof HTMLLIElement){
        this.editFormToShow = event.target.id
      }
  }

  onCancelEdit(){
    this.modalInteraction.onCloseModal()
  }

  onFormDataChange(event:UserEditData ){
    this.editData =  {
      ...this.editData,
      [event.name]: event.value
    }
    if(this.editData.preview){
      let fileReader = new FileReader()
      fileReader.onload = () => {
        this.previewImageUrl = fileReader.result as string
      }
      fileReader.readAsDataURL(this.editData.preview)
    }
  }
  onEdit(){
    this.profileServices.updateProfileData({
        description: this.editData.description,
        address: this.editData.city && this.editData.country ? this.editData.city + ',' + this.editData.country : '',
        workplace: this.editData.companyName && this.editData.position ? this.editData.companyName + ',' + this.editData.position : '',
        personalWebsite: {
          url: this.editData.url,
          preview: this.editData.preview
        }
    })
    
  }
}
