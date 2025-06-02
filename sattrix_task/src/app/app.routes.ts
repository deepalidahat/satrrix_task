import { Routes } from '@angular/router';
import { LogInComponent } from './authetication/log-in/log-in.component';
import { RegisterComponent } from './authetication/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

{
  path:'login',
  loadChildren:()=>import('./authetication/authetication.routes').then((m)=>m.authPageRoute)
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
