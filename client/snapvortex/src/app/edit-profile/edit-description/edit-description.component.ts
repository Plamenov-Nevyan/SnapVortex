import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserEditData } from 'src/app/types/User';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.css']
})
export class EditDescriptionComponent {
  @Output() descriptionChange: EventEmitter<UserEditData> = new EventEmitter()
  @Input() description: string = ''
  constructor(){}

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
      this.descriptionChange.emit({name: event.target.name, value: event.target.value})
    }
  }
}
