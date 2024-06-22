import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorRegister } from '../../models/doctor-register';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.scss'
})
export class RegisterDoctorComponent {

  doctorRegister: DoctorRegister;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.doctorRegister = new DoctorRegister();
  }

  registerDoctorForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.authService.doctorRegister(this.doctorRegister).subscribe(result => this.returnToHome())
  }

  returnToHome() {
    this.router.navigate(['/login']);
  }
}
