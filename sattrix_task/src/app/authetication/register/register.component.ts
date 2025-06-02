import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private sharedService = inject(SharedService);
  registerForm!: FormGroup;
  userIdToEdit!: number | null;
  submitted = false;
  constructor() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      comfirm_password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  getRegister(data: any) {
    this.submitted = true;
    sessionStorage.setItem('registerData', JSON.stringify(data));
    this.router.navigate(['/login']);
  }
}
