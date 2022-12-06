import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitsnbytesComponent } from './components/bitsnbytes/bitsnbytes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GdscComponent } from './components/gdsc/gdsc.component';
import { GeekforgeeksComponent } from './components/geekforgeeks/geekforgeeks.component';
import { AddeventsComponent } from './components/addevents/addevents.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
  children:[
    {path:'GDSC',component:GdscComponent},
    {path:'bitsnbytes',component:BitsnbytesComponent},
    {path:'geekforgeeks',component:GeekforgeeksComponent},
    {path:'',redirectTo:'/Clubs/geekforgeeks',pathMatch:'full'},
    { path: 'AddEvent', component: AddeventsComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
