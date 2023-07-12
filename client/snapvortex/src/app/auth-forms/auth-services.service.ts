import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {HttpClient} from "@angular/common/http"
import { User } from '../types/User';
import { Observable } from 'rxjs';
import { Session } from '../types/Session';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
endpoints  = {
  register: '/register',
  login: '/login'
}
  constructor( private http: HttpClient) { }

  registerUser(userData: User): Observable<Session>{
    const {baseUrl} = environment
    const headers= {
      'Content-Type':'application/json'
    }
    return this.http.post<Session>(`${baseUrl}${this.endpoints.register}`, JSON.stringify(userData), {headers})
  }

}
