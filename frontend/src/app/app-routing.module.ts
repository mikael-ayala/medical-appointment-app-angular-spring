import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { AppComponent } from './app.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AuthGuard } from './services/auth-guard/auth-guard.service';
import { PatientComponent } from './pages/patient/patient.component';
import { CreateAdvertisementComponent } from './pages/create-advertisement/create-advertisement.component';
import { AdvertisementsComponent } from './pages/advertisements/advertisements.component';

const routes: Routes = [
  { path: '', component: AdvertisementsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'patient-register', component: RegisterPatientComponent },
  { path: 'doctor-register', component: RegisterDoctorComponent },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: {role: 'ROLE_DOCTOR'} },
  { path: 'create-advertisement', component: CreateAdvertisementComponent, canActivate: [AuthGuard], data: {role: 'ROLE_DOCTOR'} },
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuard], data: {role: 'ROLE_PATIENT'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
