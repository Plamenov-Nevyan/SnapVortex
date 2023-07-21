import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = UserInitValues

  constructor(private profileServices: ProfileService){}

  ngOnInit(): void {
      this.profileServices.getProfileData().subscribe({
        next: (data: User) => {
          this.user = {...data}
          console.log(this.user)
        },
        error: (errMessage) => {
          console.log(errMessage)
        } 
      })
  }
}
