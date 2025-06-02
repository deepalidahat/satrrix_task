import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule,
    ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{
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
this.router.navigate(['/home-page/dashboard']);
  }
}
