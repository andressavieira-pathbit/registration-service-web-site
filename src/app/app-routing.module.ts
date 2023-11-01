import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { UnderAnalysisComponent } from './under-analysis/under-analysis.component';


const routes: Routes = [
  { path: '', component: ClientFormComponent },
  { path: 'clients', component: ClientFormComponent },
  { path: 'under-analysis', component: UnderAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
