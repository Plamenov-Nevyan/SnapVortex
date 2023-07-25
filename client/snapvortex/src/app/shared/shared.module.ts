import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CreatePostHeaderComponent } from './create-post-header/create-post-header.component';
import { ShortcutsListComponent } from './shortcuts-list/shortcuts-list.component';
import { LoginRegisterFormsComponent } from './login-register-forms/login-register-forms.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ShortcutsListItemComponent } from './shortcuts-list-item/shortcuts-list-item.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { AuthFormsModule } from '../auth-forms/auth-forms.module';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { CoverPictureComponent } from './cover-picture/cover-picture.component';
import { EditProfileModule } from '../edit-profile/edit-profile.module';



@NgModule({
  declarations:[
    CreatePostHeaderComponent,
    LoginRegisterFormsComponent,
    ModalDialogComponent,
    ShortcutsListComponent,
    TermsAndConditionsComponent,
    ShortcutsListItemComponent,
    PostArticleComponent,
    ProfilePictureComponent,
    CoverPictureComponent
    
  ],
  imports: [
    CommonModule,
    AuthFormsModule,
    EditProfileModule
  ],
  exports: [
    CreatePostHeaderComponent,
    LoginRegisterFormsComponent,
    ModalDialogComponent,
    ShortcutsListComponent,
    TermsAndConditionsComponent,
    ShortcutsListItemComponent,
    CreatePostHeaderComponent,
    PostArticleComponent,
    CoverPictureComponent,
    ProfilePictureComponent
  ]
})
export class SharedModule { }
