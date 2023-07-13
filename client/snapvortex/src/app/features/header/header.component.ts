import { Component} from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerAuthorized.component.css']
})
export class HeaderComponent {
  get authorized(): Session | null{return this.sessionServices.session}
 showProfOptions: boolean = false
 showNotifications: boolean = false

  constructor(private sessionServices: SessionStorageService, private router: Router, private modalInteractions: ModalInteractionsService){}
  onProfOptions(){
    this.showProfOptions ? this.showProfOptions = false : this.showProfOptions = true
  }
  onShowNotifications(){
    this.showNotifications ? this.showNotifications = false : this.showNotifications = true
  }

  onShowModal(event: boolean){
    this.modalInteractions.onShowModal('register')
  }
}
