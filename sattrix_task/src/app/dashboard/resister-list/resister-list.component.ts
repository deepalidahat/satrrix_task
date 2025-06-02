import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-resister-list',
  imports: [CommonModule],
  templateUrl: './resister-list.component.html',
  styleUrl: './resister-list.component.scss',
})
export class ResisterListComponent implements OnInit {
  private router = inject(Router);
  private sharedService = inject(SharedService);

  registerUser: any[] = [];

  ngOnInit(): void {
    this.sharedService.users$.subscribe((data) => {
      this.registerUser = data;
    });
  }
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.sharedService.deleteUser(id);
    }
  }

  editUser(userId: number) {
    this.router.navigate(['/home-page/dashboard/register-page'], { queryParams: { id: userId } });
  }
}
