import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
