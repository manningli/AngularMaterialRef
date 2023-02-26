import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutsomerListComponent } from './cutsomer-list/cutsomer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CutsomerListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
