import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDescriptionComponent } from './user-profile/edit-description/edit-description.component';
import { EditAddressComponent } from './user-profile/edit-address/edit-address.component';
import { EditWorkplaceComponent } from './user-profile/edit-workplace/edit-workplace.component';
import { EditWebsiteComponent } from './user-profile/edit-website/edit-website.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GroupProfileComponent } from './group-profile/group-profile.component';
import { EditGroupDescriptionComponent } from './group-profile/edit-group-description/edit-group-description.component';
import { EditGroupNameComponent } from './group-profile/edit-group-name/edit-group-name.component';
import { EditGroupRulesComponent } from './group-profile/edit-group-rules/edit-group-rules.component';
import { EditGroupPrivacyComponent } from './group-profile/edit-group-privacy/edit-group-privacy.component';



@NgModule({
  declarations: [
   UserProfileComponent,
   GroupProfileComponent,
   EditDescriptionComponent,
   EditAddressComponent,
   EditWebsiteComponent,
   EditWorkplaceComponent,
   EditGroupDescriptionComponent,
   EditGroupNameComponent,
   EditGroupRulesComponent,
   EditGroupPrivacyComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserProfileComponent,
    GroupProfileComponent,
  ]
})
export class EditProfileModule { }
