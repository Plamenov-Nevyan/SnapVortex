import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UserEditData } from 'src/app/types/User';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent {
  @Output() addressChange: EventEmitter<UserEditData> = new EventEmitter()
  @Input() city: string = ''
  @Input() country: string = ''
  constructor(){}

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
      this.addressChange.emit({name: event.target.name, value: event.target.value})
    }
  }
}
