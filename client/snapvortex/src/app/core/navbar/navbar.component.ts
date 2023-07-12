import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Session } from 'src/app/types/Session';
import { SessionStorageService } from 'src/app/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbarAuthorized.component.css']
})
export class NavbarComponent {

  @Input() authorized: Session | null = null
  @Input() showProfOptions: boolean = false
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output() logout: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor( private sessionServices: SessionStorageService, private router: Router){console.log(this.authorized)}



  onShowModal(event: MouseEvent){
    event.preventDefault()
    this.showModal.emit(true)
  }

  onLogout(){
    this.sessionServices.removeFromStorage()
    this.router.navigate(['/'])
 }
}