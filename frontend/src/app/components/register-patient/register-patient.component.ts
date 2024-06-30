import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PatientRegister } from '../../models/patient-register';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrl: './register-patient.component.scss'
})
export class RegisterPatientComponent {

  patientRegister: PatientRegister;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.patientRegister = new PatientRegister();
  }

  registerPatientForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    this.authService.patientRegister(this.patientRegister).subscribe(result => this.returnToHome())
  }

  returnToHome() {
    this.router.navigate(['/login']);
  }
}
