import { Injectable } from '@angular/core';
import { Session } from './types/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  
  get session(): Session | null{
    let session = sessionStorage.getItem('session')
    return session ? JSON.parse(session) : null
  }

  constructor() { }
  
  addToStorage(session: Session){
    sessionStorage.setItem('session', JSON.stringify(session))
  }
  removeFromStorage(){
    sessionStorage.removeItem('session')
  }
  getUserId(){
    return this.session ? this.session.id : null
  }
}
