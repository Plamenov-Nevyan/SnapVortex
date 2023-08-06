import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsContactsComponent } from './posts-contacts/posts-contacts.component';
import { PostsWallComponent } from './posts-wall/posts-wall.component';
import { PostsShortcutsComponent } from './posts-shortcuts/posts-shortcuts.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';
import { PostsContactsHeaderComponent } from './posts-contacts-header/posts-contacts-header.component';
import { PostsContactsLiItemComponent } from './posts-contacts-li-item/posts-contacts-li-item.component';
import { RouterModule } from '@angular/router';
import { ProfileMainComponent } from './profile-main/profile-main.component';
import { UserProfileComponent } from './profile-main/user-profile/user-profile.component';
import { GroupProfileComponent } from './profile-main/group-profile/group-profile.component';
import { PageProfileComponent } from './profile-main/page-profile/page-profile.component';




@NgModule({
  declarations: [
    NavbarComponent,
    NotificationsComponent,
    PostsContactsComponent,
    PostsShortcutsComponent,
    PostsWallComponent,
    PostsContactsHeaderComponent,
    PostsContactsLiItemComponent,
    PostsContactsHeaderComponent,
    PostsContactsLiItemComponent,
    ProfileMainComponent,
    UserProfileComponent,
    GroupProfileComponent,
    PageProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    NotificationsComponent,
    PostsContactsComponent,
    PostsShortcutsComponent,
    PostsWallComponent,
    PostsContactsHeaderComponent,
    PostsContactsLiItemComponent,
    ProfileMainComponent,
  ]
})
export class CoreModule { }
