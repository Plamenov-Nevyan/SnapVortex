import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDialogComponent } from '../shared/modal-dialog/modal-dialog.component';
import { ContactsOwnerComponent } from '../features/contacts-owner/contacts-owner.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }