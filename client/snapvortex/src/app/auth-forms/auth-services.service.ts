import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from "@angular/common/http"
import { User, UserLoginData, UserRegisterData } from '../types/User';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Session } from '../types/Session';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
endpoints  = {
  register: '/register',
  login: '/login'
}
socket = io('http://localhost:8000')
  constructor( private http: HttpClient) { }

  public setUserOnline(userId: string){
    this.socket.emit('userSignIn', userId)
  }

  registerUser(userData: UserRegisterData): Observable<Session>{
    const {baseUrl} = environment
    const headers= {
      'Content-Type':'application/json'
    }
    return this.http.post<Session>(`${baseUrl}${this.endpoints.register}`, JSON.stringify(userData), {headers})
  }

  loginUser(userData: UserLoginData): Observable<Session>{
    const {baseUrl} = environment
    const headers= {
      'Content-Type':'application/json'
    }
    return this.http.post<Session>(`${baseUrl}${this.endpoints.login}`, JSON.stringify(userData), {headers})
  }

}
