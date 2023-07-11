import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalDialogComponent } from '../shared/modal-dialog/modal-dialog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'sign-up',
    component: ModalDialogComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }