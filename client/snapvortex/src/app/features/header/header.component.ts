import { Component, Output, EventEmitter, Input, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerAuthorized.component.css']
})
export class HeaderComponent {
  get authorized(): Session | null{return this.sessionServices.session}
 showProfOptions: boolean = false
 showNotifications: boolean = false
 @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private sessionServices: SessionStorageService, private router: Router){}
  onProfOptions(){
    this.showProfOptions ? this.showProfOptions = false : this.showProfOptions = true
  }
  onShowNotifications(){
    this.showNotifications ? this.showNotifications = false : this.showNotifications = true
  }

  onShowModal(event: boolean){
    this.showModal.emit(true)
  }
}
