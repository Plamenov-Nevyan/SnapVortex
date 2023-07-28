import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from '../session-storage.service';
import { CreateGroupData } from '../types/CreateGroup';
import { Group } from '../types/Group';
import { groupInitValues } from '../types/typesInitValues';
import { environment } from 'src/environments/environment.development';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  userId:string | null = this.sessionServices.getUserId()
  private currentGroupData: Group = groupInitValues
  endpoints = {
    GET_GROUP_DATA: '/groups/',
    CREATE_GROUP : '/groups/create/'
  }

  get currentGroupDataGet(){
    return this.currentGroupData
  }

  set currentGroupDataSet(val: Group){
    this.currentGroupData = val
  }

  constructor( private http: HttpClient, private sessionServices: SessionStorageService) { }

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

}
