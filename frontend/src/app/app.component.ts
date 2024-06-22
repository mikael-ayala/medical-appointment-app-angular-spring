import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  role: string = '';

  constructor(private authService: AuthService) {
    this.authService.currentRole.subscribe((role) => {
      this.role = role;
    })
  }
}
