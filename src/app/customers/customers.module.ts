import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CutsomerListComponent } from './cutsomer-list/cutsomer-list.component';


@NgModule({
  declarations: [
    CutsomerListComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
