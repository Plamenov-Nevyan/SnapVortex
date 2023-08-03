import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEditData } from 'src/app/types/Page';

@Component({
  selector: 'app-edit-page-description',
  templateUrl: './edit-page-description.component.html',
  styleUrls: ['./edit-page-description.component.css']
})
export class EditPageDescriptionComponent {
  @Input() description: string = ''
  @Output() changeDescription: EventEmitter<PageEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.changeDescription.emit({name: event.target.name, value: event.target.value})
    }
  }
}
