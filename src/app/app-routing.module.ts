import { AuthGaurd } from './authentication/auth.gaurd';
import { AddeventsComponent } from './modules/clubs/components/addevents/addevents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ResearchComponent } from './components/research/research.component';
import { TalentsComponent } from './components/talents/talents.component';
import { ClubsModule } from './modules/clubs/clubs.module';
import { CreateTalentComponent } from './components/create-talent/create-talent.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  {
    path: 'Research',
    loadChildren: () =>
      import('./modules2/research/research.module').then(
        (m) => m.ResearchModule
      ),
  },
  {
    path: 'Clubs',
    loadChildren: () =>
      import('./modules/clubs/clubs.module').then((m) => m.ClubsModule),
  },
  { path:'Talents', component: TalentsComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'add-talent',component:CreateTalentComponent,canActivate:[AuthGaurd]},
  {path:'edit/:talentId',component:CreateTalentComponent,canActivate:[AuthGaurd]},
  {
    path:'Clubs/AddEvent',component:AddeventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGaurd]
})

export class AppRoutingModule {}
