import { Component, Input } from '@angular/core';
import { CreateGroupData } from 'src/app/types/CreateGroup';
import { CreatePageData } from 'src/app/types/CreatePage';

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
