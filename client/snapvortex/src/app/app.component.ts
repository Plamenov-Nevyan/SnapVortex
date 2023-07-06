import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal: boolean = false
  constructor(){ }

  onShowModal(){
    this.showModal = true
  }

  onCloseModal(){
    this.showModal = false
  }
}
