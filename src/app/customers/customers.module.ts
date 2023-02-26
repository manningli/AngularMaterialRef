import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CutsomerListComponent } from './cutsomer-list/cutsomer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CutsomerListComponent, CustomerCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,

    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class CustomersModule {}
