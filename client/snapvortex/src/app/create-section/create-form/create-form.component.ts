import { Component, Input } from '@angular/core';
import { CreateGroupData } from 'src/app/types/CreateGroup';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent {
  @Input() action: string = ''

  constructor(){
  }
}
