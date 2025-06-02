import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';


export const authPageRoute: Routes = [
     {
    path: '',
    component: LogInComponent,
    children: [
      {
        path: 'login-form',
        component: LoginFormComponent 
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },


];