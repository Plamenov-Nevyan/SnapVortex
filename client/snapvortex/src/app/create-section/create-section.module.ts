import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { PageInputsComponent } from './page-inputs/page-inputs.component';
import { GroupInputsComponent } from './group-inputs/group-inputs.component';



@NgModule({
  declarations: [
    CreateFormComponent,
    PageInputsComponent,
    GroupInputsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CreateSectionModule { }
