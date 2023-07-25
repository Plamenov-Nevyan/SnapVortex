import { Component, OnInit} from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerAuthorized.component.css']
})
export class HeaderComponent implements OnInit {
  get authorized(): Session | null{return this.sessionServices.session}
  showProfOptions: boolean = false
  showNotifications: boolean = false
  user: User = this.profileServices.profileDataGet

  constructor(
      private sessionServices: SessionStorageService,
      private router: Router,
      private modalInteractions: ModalInteractionsService,
      private profileServices: ProfileService
  ){}

  ngOnInit(): void {
    this.profileServices.getProfileData()
  }

  onProfOptions(){
    this.showProfOptions ? this.showProfOptions = false : this.showProfOptions = true
  }
  onShowNotifications(){
    this.showNotifications ? this.showNotifications = false : this.showNotifications = true
  }

  onShowModal(event: boolean){
    this.modalInteractions.onShowModal('login')
  }
}
