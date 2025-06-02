import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resister-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './resister-page.component.html',
  styleUrl: './resister-page.component.scss',
})
export class ResisterPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private sharedService = inject(SharedService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  userIdToEdit!: number | null;
  registerData!: FormGroup;
submitted = false;
  constructor() {
    this.registerData = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const id = +this.route.snapshot.queryParamMap.get('id')!;
    if (id) {
      const user = this.sharedService.getUserById(id);
      if (user) {
        this.userIdToEdit = id;
        this.registerData.patchValue(user);
      }
    }
  }

  getsumit(data: any) {
  this.submitted = true;
  

  if (this.registerData.invalid) return;

  if (this.userIdToEdit) {
    data.id = this.userIdToEdit;
    this.sharedService.updateUser(data);
  } else {
    this.sharedService.addUser(data);
  }

  this.router.navigate(['/home-page/dashboard/list']);
}
}
