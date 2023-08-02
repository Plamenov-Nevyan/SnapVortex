import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage.service';
import { CreateGroupData } from '../types/CreateGroup';
import { Group, GroupEditData } from '../types/Group';
import { groupInitValues, pageInitValues } from '../types/typesInitValues';
import { environment } from 'src/environments/environment.development';
import {Observable} from 'rxjs'
import { CreatePageData } from '../types/CreatePage';
import { Page } from '../types/Page';

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
    CREATE_PAGE: '/pages/create/',
    GET_PAGE_DATA: '/pages/'
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

  editGroup(editData: CreateGroupData){
    const {baseUrl} = environment
    const headers = {'Content-Type': 'application/json'}

    this.http.post<Group>(`${baseUrl}${this.endpoints.EDIT_GROUP_DATA}${this.currentGroupData._id}`, editData, {headers}).subscribe({
      next: (updatedGroupData: Group) => {
        console.log(updatedGroupData)
        this.currentGroupDataSet = updatedGroupData
      }
    })
  }
}
