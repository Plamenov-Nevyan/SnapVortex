import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { SessionStorageService } from '../session-storage.service';
import { User, UserAboutData } from '../types/User';
import {Observable} from 'rxjs'
import { UserInitValues } from '../types/typesInitValues';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  endpoints = {
    GET_PROFILE_DATA: '/profile/',
    UPDATE_PROFILE_DATA: '/profile/update/'
  }

  constructor(private http: HttpClient, private sessionServices: SessionStorageService) { }

  private currentProfileData: User = UserInitValues

  get profileDataGet(){
    return this.currentProfileData
  }

  set profileDataSet(data: User){
    this.currentProfileData = {...data}
  }

  getProfileData(): void{
    const {baseUrl} = environment
     this.http.get<User>(`${baseUrl}${this.endpoints.GET_PROFILE_DATA}${this.sessionServices.getUserId()}`).subscribe({
      next: (data) => {
        console.log(this.currentProfileData)
        this.profileDataSet = data}
    })
  }

  updateProfileData(updateData: UserAboutData): void{
    const {baseUrl} = environment
    const headers = {
      'Content-Type': 'application/json'
    }

    let formData = new FormData()
    if(updateData.personalWebsite.preview instanceof Blob){
      formData.append('preview', updateData.personalWebsite.preview)
    }
    formData.append('editData', JSON.stringify(updateData))
    this.http.post<User>(
      `${baseUrl}${this.endpoints.UPDATE_PROFILE_DATA}${this.sessionServices.getUserId()}`, 
      formData,
      ).subscribe({
        next: (data) => {
          this.profileDataSet = data 
          console.log(data)
        }
      })
  }
}
