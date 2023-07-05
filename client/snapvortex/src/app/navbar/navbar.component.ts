import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbarAuthorized.component.css']
})
export class NavbarComponent {

  @Input() authorized: boolean = false
  @Input() showProfOptions: boolean = false

  constructor(){}
}
