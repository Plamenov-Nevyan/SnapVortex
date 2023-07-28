import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { ImageCropperService } from 'src/app/image-cropper.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/types/Group';
import { CreateService } from 'src/app/create-section/create.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  get user(): User{ return this.profileServices.profileDataGet}
  get group(): Group {return this.createServices.currentGroupDataGet}
  activeTab: string = 'posts'
  isUser: boolean = false
  isPage: boolean = false
  isGroup: boolean = false
  groupOrPageId: string = ''

  constructor(
    private profileServices: ProfileService, 
    private modalInteractionServices: ModalInteractionsService, 
    private imageCropperService: ImageCropperService,
    private activeRoute: ActivatedRoute,
    private createServices: CreateService
    ){
    this.activeRoute.params.subscribe({
      next: () => {
        this.isUser = activeRoute.snapshot.url[0].path === 'profile'
        this.isGroup = activeRoute.snapshot.url[0].path === 'group'
        this.isPage = activeRoute.snapshot.url[0].path === 'page'
        if(this.isGroup || this.isPage){
          this.groupOrPageId = activeRoute.snapshot.params["id"]
        }
      }
    })
  }

  ngOnInit(): void {
      if(this.isUser){
        this.profileServices.getProfileData()
      }else if(this.isGroup){
        this.createServices.getGroupData(this.groupOrPageId)
      }
  }

  onSelectTab(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLAnchorElement){
      this.activeTab = event.target.id
    }
  }
}
