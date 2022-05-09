import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
