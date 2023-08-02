import { Component, Input } from '@angular/core';
import { Group } from 'src/app/types/Group';
import { Page } from 'src/app/types/Page';
import { User } from 'src/app/types/User';
import { UserInitValues, groupInitValues, pageInitValues } from 'src/app/types/typesInitValues';


@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.css']
})
export class ProfileMainComponent {
  @Input() page: Page = pageInitValues
  @Input() group: Group = groupInitValues
  @Input() profileType: string = ''
  @Input() user: User = UserInitValues

  constructor(){}
  

}
