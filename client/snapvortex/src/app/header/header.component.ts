import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './headerAuthorized.component.css']
})
export class HeaderComponent {
 authorized: boolean = true
 showProfOptions: boolean = false
 showNotifications: boolean = false
  constructor(){}

  onProfOptions(){
    this.showProfOptions ? this.showProfOptions = false : this.showProfOptions = true
  }
  onShowNotifications(){
    this.showNotifications ? this.showNotifications = false : this.showNotifications = true
  }
}
