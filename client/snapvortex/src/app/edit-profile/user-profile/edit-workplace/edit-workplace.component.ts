import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserEditData } from 'src/app/types/User';

@Component({
  selector: 'app-edit-workplace',
  templateUrl: './edit-workplace.component.html',
  styleUrls: ['./edit-workplace.component.css']
})
export class EditWorkplaceComponent {
  @Output() workplaceChange: EventEmitter<UserEditData> = new EventEmitter()
  @Input() companyName: string = ''
  @Input() position: string = ''
  constructor(){}

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
      this.workplaceChange.emit({name: event.target.name, value: event.target.value})
    }
  }
}
