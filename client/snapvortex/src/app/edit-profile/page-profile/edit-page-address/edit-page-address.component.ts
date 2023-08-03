import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEditData } from 'src/app/types/Page';

@Component({
  selector: 'app-edit-page-address',
  templateUrl: './edit-page-address.component.html',
  styleUrls: ['./edit-page-address.component.css']
})
export class EditPageAddressComponent {
  @Input() city: string = ''
  @Input() country: string = ''
  @Output() changeAddress: EventEmitter<PageEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.changeAddress.emit({name: event.target.name, value: event.target.value})
    }
  }
}
