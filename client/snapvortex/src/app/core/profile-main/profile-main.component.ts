import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  @Input() user: User = UserInitValues

  constructor(){console.log(this.user) }
  
}
