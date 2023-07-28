import { Component, Input } from '@angular/core';
import { CreatePageData } from 'src/app/types/CreatePage';
import { createPageInitVals } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-page-inputs',
  templateUrl: './page-inputs.component.html',
  styleUrls: ['./page-inputs.component.css']
})
export class PageInputsComponent {
  createDataPage: CreatePageData = {
    name : '',
    description: '',
    address: ''
  }

  constructor(){}

onChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
        this.createDataPage = {...this.createDataPage, [event.target.name]: event.target.value}
      }
  }
}
