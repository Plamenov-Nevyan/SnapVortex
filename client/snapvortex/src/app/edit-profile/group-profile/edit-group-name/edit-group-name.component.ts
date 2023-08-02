import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GroupEditData } from 'src/app/types/Group';

@Component({
  selector: 'app-edit-group-name',
  templateUrl: './edit-group-name.component.html',
  styleUrls: ['./edit-group-name.component.css']
})
export class EditGroupNameComponent {
  @Input() name: string = ''
  @Output() changeName: EventEmitter<GroupEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.changeName.emit({name: event.target.name, value: event.target.value})
    }
  }
}
