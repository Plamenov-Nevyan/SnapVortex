import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage.service';
import { CreateGroupData } from '../types/CreateGroup';
import { Group, GroupEditData, GroupEditDataFiltered } from '../types/Group';
import { groupInitValues} from '../types/typesInitValues';
import { environment } from 'src/environments/environment.development';
import { ProfileService } from '../features/profile.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  userId:string | null = this.sessionServices.getUserId()
  private currentGroupData: Group = groupInitValues
  endpoints = {
    GET_GROUP_DATA: '/groups/',
    CREATE_GROUP : '/groups/create/',
    EDIT_GROUP_DATA: '/groups/edit/',
    UPDATE_GROUP_COVER_PIC: '/groups/cover-picture/',
    UPDATE_GROUP_PROFILE_PIC: '/groups/profile-picture/',
  }

  get currentGroupDataGet(){
    return this.currentGroupData
  }

  set currentGroupDataSet(val: Group){
    this.currentGroupData = val
    this.currentGroupData$.next(this.currentGroupData)
  }

  currentGroupData$ = new BehaviorSubject(this.currentGroupData)

  constructor( private http: HttpClient, private sessionServices: SessionStorageService, private profileServices: ProfileService ) { }

  onCreateGroup(groupData: CreateGroupData){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

   this.http.post<Group>(`${baseUrl}${this.endpoints.CREATE_GROUP}${this.userId}`, groupData, {headers}).subscribe({
    next: (newGroup) => {
      this.currentGroupDataSet = newGroup
      this.profileServices.getProfileData()
    }
   })
  } 

  getGroupData(groupId: string) {
    const {baseUrl} = environment

    this.http.get<Group>(`${baseUrl}${this.endpoints.GET_GROUP_DATA}${groupId}`).subscribe({
      next: (group: Group) => {
        this.currentGroupDataSet = group
        this.profileServices.getProfileData()
      }
    })
  }

  editGroup(editData: GroupEditDataFiltered){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    this.http.post<Group>(`${baseUrl}${this.endpoints.EDIT_GROUP_DATA}${this.currentGroupData._id}`, editData, {headers}).subscribe({
      next: (updatedGroupData: Group) => {
        this.currentGroupDataSet = updatedGroupData
        this.profileServices.getProfileData()
      }
    })
  }

  updateGroupCoverPicture(file: File){
    const {baseUrl} = environment
    let formData = new FormData()
    formData.append('coverPicture', file)
    this.http.post<string>(
      `${baseUrl}${this.endpoints.UPDATE_GROUP_COVER_PIC}${this.currentGroupData._id}`,
      formData
    ).subscribe({
      next:(newPicture) => {
        this.currentGroupDataSet = {...this.currentGroupData, coverPicture: newPicture}
        this.profileServices.getProfileData()
      } 
    })
  }

  updateGroupProfilePicture(file: File){
    const {baseUrl} = environment
    let formData = new FormData()
    formData.append('profilePicture', file)
    this.http.post<string>(
      `${baseUrl}${this.endpoints.UPDATE_GROUP_PROFILE_PIC}${this.currentGroupData._id}`,
      formData
    ).subscribe({
      next:(newPicture) => {
        this.currentGroupDataSet = {...this.currentGroupData, profilePicture: newPicture}
        this.profileServices.getProfileData()
      } 
    })
  }

}


