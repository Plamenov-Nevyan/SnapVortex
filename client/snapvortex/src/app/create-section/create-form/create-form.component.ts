import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  @Input() createAction: string = ''
  createDataPage = {
    name : '',
    description: '',
    address: ''
  }
  createDataGroup = {
    name: '',
    isPrivate: false,
    description: '',
    rule:'',
    rules: []
  }
}
