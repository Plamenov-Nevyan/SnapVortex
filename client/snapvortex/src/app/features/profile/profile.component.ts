import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  get user(): User{ return this.profileServices.profileDataGet}
  activeTab: string = 'posts'

  constructor(private profileServices: ProfileService, private modalInteractionServices: ModalInteractionsService){}

  ngOnInit(): void {
      this.profileServices.getProfileData()
  }

  onEdit(event: MouseEvent){
    event.preventDefault()
    this.modalInteractionServices.onShowModal('edit-profile')
  }

  onSelectTab(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLAnchorElement){
      this.activeTab = event.target.id
    }
  }
}
