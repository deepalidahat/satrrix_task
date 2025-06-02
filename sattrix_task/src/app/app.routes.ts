import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
path:'register',
component:RegisterComponent
  },
  {
path:'home-page',
loadChildren:() => import('./dashboard/home-page.routes').then((m)=>m.homePageRoute)
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
