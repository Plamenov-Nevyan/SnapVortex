import { Component, Input } from '@angular/core';
import { CreatePageData } from 'src/app/types/CreatePage';
import { createPageInitVals } from 'src/app/types/typesInitValues';
import { CreateService } from '../create.service';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { Router } from '@angular/router';
import { Page } from 'src/app/types/Page';

@Component({
  selector: 'app-page-inputs',
  templateUrl: './page-inputs.component.html',
  styleUrls: ['./page-inputs.component.css']
})
export class PageInputsComponent {
  createDataPage: CreatePageData = {
    name : '',
    description: '',
    address: '',
    city: '',
    country: ''
  }

  constructor(
    private createServices: CreateService, 
    private modalInteractions:ModalInteractionsService, 
    private router: Router
  ){}

onChange(event: Event){
    if(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement){
        this.createDataPage = {...this.createDataPage, [event.target.name]: event.target.value}
      }
  }

  onCreate(event: MouseEvent){
    event.preventDefault()
    if(this.createDataPage.city && this.createDataPage.country){
      this.createDataPage.address = this.createDataPage.city + ', ' + this.createDataPage.country 
    }
    Reflect.deleteProperty(this.createDataPage, 'city')
    Reflect.deleteProperty(this.createDataPage, 'country')
    this.createServices.onCreatePage(this.createDataPage).subscribe({
      next: (newPage: Page) => {
        this.modalInteractions.onCloseModal()
        this.router.navigate(['/page', `${newPage._id}`])
      }
    })
  }
}
