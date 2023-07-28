import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { PageInputsComponent } from './page-inputs/page-inputs.component';
import { GroupInputsComponent } from './group-inputs/group-inputs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateFormComponent,
    PageInputsComponent,
    GroupInputsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CreateFormComponent
  ]
})
export class CreateSectionModule { }
