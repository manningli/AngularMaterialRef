import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CutsomerListComponent } from './cutsomer-list/cutsomer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CutsomerListComponent,
  },
  {
    path: 'info',
    component: CustomerCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
