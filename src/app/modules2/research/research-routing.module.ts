import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AimlComponent } from './components/aiml/aiml.component';
import { DashboardResComponent } from './components/dashboard-res/dashboard-res.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { AddresearchComponent } from './components/addresearch/addresearch.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardResComponent,
    children: [
      { path: 'aiml', component: AimlComponent },
      { path: 'cloud', component: CloudComponent },
      { path: '', redirectTo: '/Research/aiml', pathMatch: 'full' },
      { path: 'AddResearch', component: AddresearchComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRoutingModule {}
