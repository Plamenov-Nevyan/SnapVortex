import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserEditData } from 'src/app/types/User';

@Component({
  selector: 'app-edit-website',
  templateUrl: './edit-website.component.html',
  styleUrls: ['./edit-website.component.css']
})
export class EditWebsiteComponent {
  @Output() websiteChange: EventEmitter<UserEditData> = new EventEmitter()
  @Input() url:string = ''
  @Input() previewImageUrl: string = ''
  constructor(){}

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
      let fileList: FileList | null 
      if(event.target.name === 'preview'){
        let element = event.currentTarget as HTMLInputElement
        fileList = element.files
        this.websiteChange.emit({name: event.target.name, value: fileList ? fileList[0]: null})
      }else{
         this.websiteChange.emit({name: event.target.name, value: event.target.value})
      }
    }
  }
}
