import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { SessionStorageService } from '../session-storage.service';
import { User } from '../types/User';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  endpoints = {
    GET_PROFILE_DATA: '/profile/'
  }

  constructor(private http: HttpClient, private sessionServices: SessionStorageService) { }

  getProfileData(): Observable<User>{
    const {baseUrl} = environment
    return this.http.get<User>(`${baseUrl}${this.endpoints.GET_PROFILE_DATA}${this.sessionServices.getUserId()}`)
  }
}
