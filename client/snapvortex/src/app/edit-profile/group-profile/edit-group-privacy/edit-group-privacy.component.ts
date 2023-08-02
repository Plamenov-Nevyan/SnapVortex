import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GroupEditData } from 'src/app/types/Group';

@Component({
  selector: 'app-edit-group-privacy',
  templateUrl: './edit-group-privacy.component.html',
  styleUrls: ['./edit-group-privacy.component.css']
})
export class EditGroupPrivacyComponent {
  @Input() isPrivate: boolean = false
  @Input() currentPrivacy: boolean = false
  @Output() changePrivacy: EventEmitter<GroupEditData> = new EventEmitter()

  constructor(){
  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.changePrivacy.emit({name: event.target.name, value: event.target.checked})
    }
  }
}
