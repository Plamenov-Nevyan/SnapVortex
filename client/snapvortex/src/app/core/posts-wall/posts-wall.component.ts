import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/features/profile.service';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';

@Component({
  selector: 'app-posts-wall',
  templateUrl: './posts-wall.component.html',
  styleUrls: ['./posts-wall.component.css']
})
export class PostsWallComponent implements OnInit {
  user: User = UserInitValues
  constructor(private profileServices: ProfileService){}

  ngOnInit(): void {
      this.profileServices.getProfileData().subscribe({
        next: (userData) => this.user = {...userData}
      })
  }
}
