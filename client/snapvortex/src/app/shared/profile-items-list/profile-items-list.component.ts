import { Component, Input } from '@angular/core';
import { Group } from 'src/app/types/Group';
import { Page } from 'src/app/types/Page';
import { User } from 'src/app/types/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-items-list',
  templateUrl: './profile-items-list.component.html',
  styleUrls: ['./profile-items-list.component.css']
})
export class ProfileItemsListComponent {
  @Input() items: any= []
  @Input() createdItems: any = []
  @Input() itemsType: string = ''
  constructor(private router: Router){
    console.log(this.itemsType)
  }


}
