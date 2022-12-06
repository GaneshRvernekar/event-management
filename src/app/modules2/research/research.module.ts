import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResearchRoutingModule } from './research-routing.module';
import { AimlComponent } from './components/aiml/aiml.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { DashboardResComponent } from './components/dashboard-res/dashboard-res.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { AddresearchComponent } from './components/addresearch/addresearch.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AimlComponent,
    CloudComponent,
    DashboardResComponent,
    AddresearchComponent,
  ],
  imports: [
    CommonModule,
    ResearchRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
  ],
  exports: [MatFormField],
})
export class ResearchModule {}
