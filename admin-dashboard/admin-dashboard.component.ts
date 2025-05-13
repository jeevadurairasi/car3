import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  admins: any[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.fetchAdmins();
  }

  fetchAdmins() {
    this.adminService.getAdmins().subscribe((data: any) => {
      this.admins = data;
    });
  }

  deleteAdmin(id: string) {
    if (confirm('Are you sure you want to delete this admin?')) {
      this.adminService.deleteAdmin(id).subscribe(() => {
        alert('Admin deleted successfully!');
        this.fetchAdmins(); // Refresh the admin list after deletion
      });
    }
  }
}