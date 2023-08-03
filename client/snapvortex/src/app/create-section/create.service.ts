import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage.service';
import { CreateGroupData } from '../types/CreateGroup';
import { Group, GroupEditData, GroupEditDataFiltered } from '../types/Group';
import { groupInitValues, pageInitValues } from '../types/typesInitValues';
import { environment } from 'src/environments/environment.development';
import {Observable} from 'rxjs'
import { CreatePageData } from '../types/CreatePage';
import { Page, PageEditDataFiltered } from '../types/Page';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  userId:string | null = this.sessionServices.getUserId()
  private currentGroupData: Group = groupInitValues
  private currentPageData: Page = pageInitValues
  endpoints = {
    GET_GROUP_DATA: '/groups/',
    CREATE_GROUP : '/groups/create/',
    EDIT_GROUP_DATA: '/groups/edit/',
    UPDATE_GROUP_COVER_PIC: '/groups/cover-picture/',
    UPDATE_GROUP_PROFILE_PIC: '/groups/profile-picture/',
    CREATE_PAGE: '/pages/create/',
    GET_PAGE_DATA: '/pages/',
    EDIT_PAGE_DATA: '/pages/edit/',
    UPDATE_PAGE_COVER_PIC: '/pages/cover-picture/',
    UPDATE_PAGE_PROFILE_PIC: '/pages/profile-picture/'
  }

  get currentGroupDataGet(){
    return this.currentGroupData
  }

  set currentGroupDataSet(val: Group){
    this.currentGroupData = val
  }

  get currentPageDataGet(){
    return this.currentPageData
  }

  set currentPageDataSet(val: Page){
    this.currentPageData = val
  }

  constructor( private http: HttpClient, private sessionServices: SessionStorageService) { }

  onCreatePage(pageData: CreatePageData){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    return this.http.post<Page>(`${baseUrl}${this.endpoints.CREATE_PAGE}${this.userId}`, pageData, {headers})
  }

  getPageData(pageId: string){
    const {baseUrl} = environment

    this.http.get<Page>(`${baseUrl}${this.endpoints.GET_PAGE_DATA}${pageId}`).subscribe({
      next: (page: Page) => {
        this.currentPageDataSet = page
      }
    })
  }

  editPage(editData: PageEditDataFiltered){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    this.http.post<Page>(`${baseUrl}${this.endpoints.EDIT_PAGE_DATA}${this.currentPageData._id}`, editData, {headers}).subscribe({
      next: (updatedPageData: Page) => {
        this.currentPageDataSet = updatedPageData
      }
    })
  }

  updatePageCoverPicture(file: File){
    const {baseUrl} = environment
    let formData = new FormData()
    formData.append('coverPicture', file)
    this.http.post<string>(
      `${baseUrl}${this.endpoints.UPDATE_PAGE_COVER_PIC}${this.currentPageData._id}`,
      formData
    ).subscribe({
      next:(newPicture) => {
        this.currentPageDataSet = {...this.currentPageData, coverPicture: newPicture}
      } 
    })
  }

  updatePageProfilePicture(file: File){
    const {baseUrl} = environment
    let formData = new FormData()
    formData.append('profilePicture', file)
    this.http.post<string>(
      `${baseUrl}${this.endpoints.UPDATE_PAGE_PROFILE_PIC}${this.currentPageData._id}`,
      formData
    ).subscribe({
      next:(newPicture) => {
        this.currentPageDataSet = {...this.currentPageData, profilePicture: newPicture}
      } 
    })
  }


  onCreateGroup(groupData: CreateGroupData): Observable<Group>{
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    return this.http.post<Group>(`${baseUrl}${this.endpoints.CREATE_GROUP}${this.userId}`, groupData, {headers})
  } 

  getGroupData(groupId: string) {
    const {baseUrl} = environment

    this.http.get<Group>(`${baseUrl}${this.endpoints.GET_GROUP_DATA}${groupId}`).subscribe({
      next: (group: Group) => {
        this.currentGroupDataSet = group
      }
    })
  }

  editGroup(editData: GroupEditDataFiltered){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    this.http.post<Group>(`${baseUrl}${this.endpoints.EDIT_GROUP_DATA}${this.currentGroupData._id}`, editData, {headers}).subscribe({
      next: (updatedGroupData: Group) => {
        this.currentGroupDataSet = updatedGroupData
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
      } 
    })
  }

}


