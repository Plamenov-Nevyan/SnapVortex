import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../types/Email';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { EmailResponse } from '../types/EmailResponse';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  endpoints = {
    send: '/email/send'
  }
  constructor(private http: HttpClient) { }

  sendEmail(emailData: Email): Observable<EmailResponse>{
    const {baseUrl} = environment
    const headers = {
      'Content-Type':'application/json'
    }
    return this.http.post<EmailResponse>(`${baseUrl}${this.endpoints.send}`, emailData, {headers})
  }
}
