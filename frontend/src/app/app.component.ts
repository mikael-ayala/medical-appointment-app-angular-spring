import { LoaderService } from './services/loader/loader.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  role: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    public LoaderService: LoaderService
  ) {
    this.authService.currentRole.subscribe((role) => {
      this.role = role;
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
