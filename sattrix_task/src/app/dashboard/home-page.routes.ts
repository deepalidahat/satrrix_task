import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ResisterListComponent } from './resister-list/resister-list.component';
import { ResisterPageComponent } from './resister-page/resister-page.component';

export const homePageRoute: Routes = [
  {
    path: 'dashboard',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: ResisterPageComponent,
      },
      {
        path: 'list',
        component: ResisterListComponent,
      },
      {
        path: 'register-page',
        component: ResisterPageComponent,
      },
    ],
  },
];
