import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GroupEditData } from 'src/app/types/Group';

@Component({
  selector: 'app-edit-group-description',
  templateUrl: './edit-group-description.component.html',
  styleUrls: ['./edit-group-description.component.css']
})
export class EditGroupDescriptionComponent {
  @Input() description: string = ''
  @Output() changeDescription: EventEmitter<GroupEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLTextAreaElement){
      this.changeDescription.emit({name: event.target.name, value: event.target.value})
    }
  }
}
