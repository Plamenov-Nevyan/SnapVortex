import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ProfileService } from 'src/app/features/profile.service';
import { Group } from 'src/app/types/Group';
import { User } from 'src/app/types/User';
import { UserInitValues } from 'src/app/types/typesInitValues';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-shortcuts',
  templateUrl: './posts-shortcuts.component.html',
  styleUrls: ['./posts-shortcuts.component.css']
})
export class PostsShortcutsComponent{
 get profileData(): User {return this.profileServices.profileDataGet}

  constructor(private profileServices: ProfileService){
  }
}
