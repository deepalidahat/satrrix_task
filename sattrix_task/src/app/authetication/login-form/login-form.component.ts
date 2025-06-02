import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule,
    ReactiveFormsModule,RouterLink,CommonModule,],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
 private fb = inject(FormBuilder);
   private router = inject(Router);
submitted = false;
loginForm!: FormGroup;


constructor(){
this.loginForm=this.fb.group({
  username:['',Validators.required],
  password:['',Validators.required]
})
}
  ngOnInit(): void {
   
  }

  getLogin(data:any){
this.submitted = true;

  if (this.loginForm.invalid) return;
  sessionStorage.setItem('loginData', JSON.stringify(data));

  console.log(data, 'login data');
this.router.navigate(['/home-page/dashboard/register-page']);
  }
}
