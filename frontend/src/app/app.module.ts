import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { RegisterDoctorComponent } from './components/register-doctor/register-doctor.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PatientComponent } from './pages/patient/patient.component';
import { CreateAdvertisementComponent } from './pages/create-advertisement/create-advertisement.component';
import { AdvertisementsComponent } from './pages/advertisements/advertisements.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreateAppointmentComponent } from './pages/create-appointment/create-appointment.component';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterPatientComponent,
    RegisterDoctorComponent,
    DoctorComponent,
    PatientComponent,
    CreateAdvertisementComponent,
    AdvertisementsComponent,
    CreateAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatChipsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
