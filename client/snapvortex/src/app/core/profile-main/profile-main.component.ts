import { Component, Input } from '@angular/core';
import { Group } from 'src/app/types/Group';
import { User } from 'src/app/types/User';
import { UserInitValues, groupInitValues} from 'src/app/types/typesInitValues';


@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  @Input() group: Group = groupInitValues
  @Input() profileType: string = ''
  @Input() user: User = UserInitValues
  @Input() activeTab:string = ''
  @Input() isOwner:boolean = false
  @Input() isMember:boolean = false

  constructor(){}
  

}
