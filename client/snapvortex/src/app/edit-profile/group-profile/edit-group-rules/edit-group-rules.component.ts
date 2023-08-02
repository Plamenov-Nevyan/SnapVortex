import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GroupEditData } from 'src/app/types/Group';

@Component({
  selector: 'app-edit-group-rules',
  templateUrl: './edit-group-rules.component.html',
  styleUrls: ['./edit-group-rules.component.css']
})
export class EditGroupRulesComponent {
  @Input() rule: string = ''
  @Input() rules: string[] = []
  @Output() addRule: EventEmitter<string> = new EventEmitter()
  @Output() removeRule: EventEmitter<string> = new EventEmitter()
  @Output() changeRule: EventEmitter<GroupEditData> = new EventEmitter()

  constructor(){

  }

  onFormDataChange(event: Event){
    if(event.target instanceof HTMLInputElement){
      this.changeRule.emit({name: event.target.name, value: event.target.value})
    }
  }

  onAddRule(event: MouseEvent){
    event.preventDefault()
    this.addRule.emit(this.rule)
    this.rule = ''
  }

  onRemoveRule(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLButtonElement){
      console.log(event.target.id)
      this.removeRule.emit(event.target.id)
    }
  }
}
