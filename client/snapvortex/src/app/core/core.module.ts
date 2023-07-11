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
    PostsContactsLiItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent,
    NotificationsComponent,
    PostsContactsComponent,
    PostsShortcutsComponent,
    PostsWallComponent,
    PostsContactsHeaderComponent,
    PostsContactsLiItemComponent
  ]
})
export class CoreModule { }
