import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  login() {
    this.adminService.login(this.username, this.password).subscribe(
      (res: any) => {
        alert(res.message);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}