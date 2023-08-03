import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEditData } from 'src/app/types/Page';

@Component({
  selector: 'app-edit-page-name',
  templateUrl: './edit-page-name.component.html',
  styleUrls: ['./edit-page-name.component.css']
})
export class EditPageNameComponent {
  @Input() name: string = ''
  @Output() changeName: EventEmitter<PageEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.changeName.emit({name: event.target.name, value: event.target.value})
    }
  }
}
