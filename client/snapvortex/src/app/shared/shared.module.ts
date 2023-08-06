import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CreatePostHeaderComponent } from './create-post-header/create-post-header.component';
import { LoginRegisterFormsComponent } from './login-register-forms/login-register-forms.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ShortcutsListItemComponent } from './shortcuts-list-item/shortcuts-list-item.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { AuthFormsModule } from '../auth-forms/auth-forms.module';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { CoverPictureComponent } from './cover-picture/cover-picture.component';
import { EditProfileModule } from '../edit-profile/edit-profile.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ImgCropSectionComponent } from './img-crop-section/img-crop-section.component';
import { CreateSectionModule } from '../create-section/create-section.module';
import { ProfileItemsListComponent } from './profile-items-list/profile-items-list.component';
import { RouterModule } from '@angular/router';
import { ItemCardComponent } from './profile-items-list/item-card/item-card.component';
import { FeelingEmojisComponent } from './feeling-emojis/feeling-emojis.component';
import { ConfirmationsComponent } from './confirmations/confirmations.component';
import { DeleteConfirmationComponent } from './confirmations/delete-confirmation/delete-confirmation.component';


@NgModule({
  declarations:[
    CreatePostHeaderComponent,
    LoginRegisterFormsComponent,
    ModalDialogComponent,
    TermsAndConditionsComponent,
    ShortcutsListItemComponent,
    PostArticleComponent,
    ProfilePictureComponent,
    CoverPictureComponent,
    ImgCropSectionComponent,
    ProfileItemsListComponent,
    ItemCardComponent,
    FeelingEmojisComponent,
    ConfirmationsComponent,
    DeleteConfirmationComponent,
    
  ],
  imports: [
    CommonModule,
    AuthFormsModule,
    EditProfileModule,
    ImageCropperModule,
    CreateSectionModule,
    RouterModule
  ],
  exports: [
    CreatePostHeaderComponent,
    LoginRegisterFormsComponent,
    ModalDialogComponent,
    TermsAndConditionsComponent,
    ShortcutsListItemComponent,
    CreatePostHeaderComponent,
    PostArticleComponent,
    CoverPictureComponent,
    ProfilePictureComponent,
    ProfileItemsListComponent
  ]
})
export class SharedModule { }
