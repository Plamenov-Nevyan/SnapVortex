import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsOwnerComponent } from './contacts-owner/contacts-owner.component';



@NgModule({
  declarations: [
    PostsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactsOwnerComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    PostsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class FeaturesModule { }
