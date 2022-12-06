import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubsRoutingModule } from './clubs-routing.module';
import { GeekforgeeksComponent } from './components/geekforgeeks/geekforgeeks.component';
import { GdscComponent } from './components/gdsc/gdsc.component';
import { BitsnbytesComponent } from './components/bitsnbytes/bitsnbytes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { AddeventsComponent } from './components/addevents/addevents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import {
//   IconModule,
//   IconSetModule,
//   IconSetService,
// } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    GeekforgeeksComponent,
    GdscComponent,
    BitsnbytesComponent,
    DashboardComponent,
    AddeventsComponent,
  ],
  imports: [
    CommonModule,
    ClubsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatDividerModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [MatFormField],
})
export class ClubsModule {}
