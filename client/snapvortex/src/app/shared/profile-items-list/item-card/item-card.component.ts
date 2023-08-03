import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() name: string = ''
  @Input() coverPicture: string = ''
  @Input() profilePicture: string = ''

  constructor(){
    
  }
}
