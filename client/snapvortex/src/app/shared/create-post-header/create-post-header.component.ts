import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-create-post-header',
  templateUrl: './create-post-header.component.html',
  styleUrls: ['./create-post-header.component.css']
})
export class CreatePostHeaderComponent {
  @Input() profilePicture: string = ''
 
  constructor(){ console.log(this.profilePicture)}

}
