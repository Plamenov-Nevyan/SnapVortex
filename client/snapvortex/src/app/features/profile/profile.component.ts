import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { ImageCropperService } from 'src/app/image-cropper.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/types/Group';
import { CreateService } from 'src/app/create-section/create.service';
import { Page } from 'src/app/types/Page';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  get user(): User{ return this.profileServices.profileDataGet}
  get group(): Group {return this.createServices.currentGroupDataGet}
  get page(): Page {return this.createServices.currentPageDataGet}
  activeTab: string = 'posts'
  isUser: boolean = false
  isPage: boolean = false
  isGroup: boolean = false
  groupOrPageId: string = ''
  profileType: string = ''
  isOwner: boolean = false
  isMember:boolean = false
  isFollower: boolean = false


  constructor(
    private profileServices: ProfileService, 
    private modalInteractionServices: ModalInteractionsService, 
    private imageCropperService: ImageCropperService,
    private activeRoute: ActivatedRoute,
    private createServices: CreateService,
    private sessionServices: SessionStorageService
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
        this.profileType = 'user'
        this.isOwner = this.user._id === this.sessionServices.getUserId()
      }else if(this.isGroup){
        this.createServices.getGroupData(this.groupOrPageId)
        this.profileType = 'group'
        this.isOwner = this.group.owner === this.sessionServices.getUserId()
        this.isMember = this.group.members.some(member => member._id === this.sessionServices.getUserId())
      }else if(this.isPage){
        this.createServices.getPageData(this.groupOrPageId)
        this.profileType = 'page'
        this.isOwner = this.page.owner === this.sessionServices.getUserId()
        this.isFollower = this.page.followers.some(follower => follower._id === this.sessionServices.getUserId())
      }
  }

  onSelectTab(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLAnchorElement){
      this.activeTab = event.target.id
    }
  }
}
