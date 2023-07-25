import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { EditDescriptionComponent } from './edit-description/edit-description.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { EditWorkplaceComponent } from './edit-workplace/edit-workplace.component';
import { EditWebsiteComponent } from './edit-website/edit-website.component';




@NgModule({
  declarations: [
    EditSectionComponent,
    EditDescriptionComponent,
    EditAddressComponent,
    EditWorkplaceComponent,
    EditWebsiteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EditSectionComponent
  ]
})
export class EditProfileModule { }
