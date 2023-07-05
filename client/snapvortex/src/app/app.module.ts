import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { ShortcutsComponent } from './posts/shortcuts/shortcuts.component';
import { PostsWallComponent } from './posts/posts-wall/posts-wall.component';
import { ContactsComponent } from './posts/contacts/contacts.component';
import { GroupsListComponent } from './posts/shortcuts/groups-list/groups-list.component';
import { PagesListComponent } from './posts/shortcuts/pages-list/pages-list.component';
import { PostsWallHeaderComponent } from './posts/posts-wall/posts-wall-header/posts-wall-header.component';
import { PostArticleComponent } from './posts/posts-wall/post-article/post-article.component';
import { ContactsHeaderComponent } from './posts/contacts/contacts-header/contacts-header.component';
import { ContactsListItemComponent } from './posts/contacts/contacts-list-item/contacts-list-item.component';
import { NotificationsComponent } from './header/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PostsComponent,
    ShortcutsComponent,
    PostsWallComponent,
    ContactsComponent,
    GroupsListComponent,
    PagesListComponent,
    PostsWallHeaderComponent,
    PostArticleComponent,
    ContactsHeaderComponent,
    ContactsListItemComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
