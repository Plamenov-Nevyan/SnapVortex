import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover-picture',
  templateUrl: './cover-picture.component.html',
  styleUrls: ['./cover-picture.component.css']
})
export class CoverPictureComponent {

  @Input() picture: string = ''
  
  constructor(){console.log(this.picture) }
}
