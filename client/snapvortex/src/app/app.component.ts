import { Component } from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal: boolean = false
 

  constructor(){}

  onShowModal(){
    this.showModal = true
  }

  onCloseModal(){
    this.showModal = false
  }
}
