import { Component, Input } from '@angular/core';
import { CreateGroupData } from 'src/app/types/CreateGroup';
import { createGroupInitVals } from 'src/app/types/typesInitValues';
import { CreateService } from '../create.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Router } from '@angular/router';
import { Group } from 'src/app/types/Group';

@Component({
  selector: 'app-group-inputs',
  templateUrl: './group-inputs.component.html',
  styleUrls: ['./group-inputs.component.css']
})
export class GroupInputsComponent {
  createDataGroup: CreateGroupData = {
    name: '',
    isPrivate: false,
    description: '',
    rule:'',
    rules: []
  }
  constructor(private createServices: CreateService, private modalInteractions:ModalInteractionsService, private router: Router){}

  onChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
        if(event.target instanceof HTMLInputElement){
          this.createDataGroup = {
            ...this.createDataGroup,
            [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value 
          }
        }else{
          this.createDataGroup = {
            ...this.createDataGroup,
            [event.target.name] : event.target.value 
            }
        }
      }
  }

  onAddRule(event: MouseEvent){
    event.preventDefault()
    if(this.createDataGroup.rule !== ''){this.createDataGroup.rules = [
      ...this.createDataGroup.rules, this.createDataGroup.rule
      ]
      this.createDataGroup.rule = ''
    }
  }

  onCreate(event: MouseEvent){
    event.preventDefault()
    Reflect.deleteProperty(this.createDataGroup, 'rule')
    this.createServices.onCreateGroup(this.createDataGroup).subscribe({
      next: (newGroup: Group) => {
        this.modalInteractions.onCloseModal()
        this.router.navigate(['/group', `${newGroup._id}`])
      }
    })
  }
}
