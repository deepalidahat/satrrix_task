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
import { SharedService } from '../services/shared.service';

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
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const id = +this.route.snapshot.queryParamMap.get('id')!;
    if (id) {
      const user = this.sharedService.getUserById(id);
      if (user) {
        this.userIdToEdit = id;
        this.registerForm.patchValue(user);
      }
    }
  }

  getRegister(data: any) {
    this.submitted = true;
    if (this.userIdToEdit) {
      data.id = this.userIdToEdit;
      this.sharedService.updateUser(data);
      this.router.navigate(['/home-page/dashboard/list']);
    } else {
       if (this.registerForm.invalid) return;
      sessionStorage.setItem('registerData', JSON.stringify(data));
       const saved = sessionStorage.getItem('registerData');
    if (saved) {
      const savedUser = JSON.parse(saved);
      this.sharedService.addUser(savedUser);
    }
     
      this.router.navigate(['/login']);
    }
  }
}
