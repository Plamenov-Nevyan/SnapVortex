import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues, groupInitValues } from 'src/app/types/typesInitValues';
import { ModalInteractionsService } from 'src/app/modal-interactions.service';
import { ImageCropperService } from 'src/app/image-cropper.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/types/Group';
import { CreateService } from 'src/app/create-section/create.service';
import { SessionStorageService } from 'src/app/session-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = UserInitValues
  otherUserProfile: User = UserInitValues
  group: Group = groupInitValues
  activeTab: string = 'posts'
  isUser: boolean = false
  isGroup: boolean = false
  groupId: string = ''
  userFromRouteId: string = ''
  profileType: string = ''
  isOwner: boolean = false
  isMember:boolean = false


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
        if(this.isGroup){
          this.groupId = activeRoute.snapshot.params["id"]
        }else if(this.isUser){
          this.userFromRouteId = activeRoute.snapshot.params["id"]

        }
      }
    })
  }

  ngOnInit(): void {
      if(this.isUser){
        this.profileType = 'user'
        this.isOwner = this.sessionServices.getUserId() === this.userFromRouteId
        if(!this.isOwner){
          this.profileServices.getProfileDataForOtherUser(this.userFromRouteId).subscribe({
            next: (profileData) => this.otherUserProfile = {...profileData}
          })
        }else {
          this.profileServices.currentProfileData$.subscribe({
            next: (profileData) => {
              this.user = {...profileData}
            }
          })
        }
      }else if(this.isGroup){
        this.createServices.getGroupData(this.groupId)
        this.createServices.currentGroupData$.subscribe({
          next: (groupData) => {
            this.group = {...groupData}
            this.profileType = 'group'
            this.isOwner = this.group.owner._id === this.sessionServices.getUserId()
            this.isMember = this.group.members.some(member => member._id === this.user._id)
          }
        })
      }
  }

  onSelectTab(event: MouseEvent){
    event.preventDefault()
    if(event.target instanceof HTMLAnchorElement){
      this.activeTab = event.target.id
    }
  }
}
