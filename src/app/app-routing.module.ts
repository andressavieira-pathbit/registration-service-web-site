import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewClientComponent } from './new-client/new-client.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientFormComponent },
  { path: 'clients', component: ClientFormComponent },
  { path: 'new-client', component: NewClientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
