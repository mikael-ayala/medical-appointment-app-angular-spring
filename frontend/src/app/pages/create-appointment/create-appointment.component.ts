import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { Advertisement } from '../../models/advertisement';
import { Appointment } from '../../models/appointment';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { AppointmentService } from '../../services/appointment/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.scss'
})
export class CreateAppointmentComponent {
  advertisement = new Advertisement();
  id: any;

  public color: ThemePalette = 'primary';

  private year = new Date().getFullYear();
  private month = new Date().getMonth();
  private day = new Date().getDate() + 1;

  public disableButton: boolean = true;

  public minDate = new Date(this.year, this.month, this.day, 0, 0, 0);
  public maxDate = new Date(this.year, this.month + 2, this.day, 0, 0, 0);

  public dateControl = new FormControl(new Date(this.year, this.month, this.day, 6, 0, 0));

  appointmentForm = new FormGroup({
    dateControl: new FormControl(''),
  });

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  constructor(
    private router: Router,
    private advertisementService: AdvertisementService,
    private appointmentService: AppointmentService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => this.id = param['id' as keyof Object]);
    this.advertisementService.findById(this.id).subscribe(advertisement => {
      this.advertisement = advertisement;
    });
  }

  checkAvailability() {
    let date = this.dateControl.value;

    this.appointmentService.existsByDate(date!.toISOString()).subscribe(b => {
      b ? this.disableButton = true : this.disableButton = false;
    });
  }

  onSubmit() {
    let date = this.dateControl.value;

    let appointment: Appointment = {};
    appointment.date = date?.toISOString();
    appointment.advertisementId = this.advertisement.id;
    appointment.doctorId = this.advertisement.user?.id;

    this.appointmentService.insert(appointment).subscribe(() => this.router.navigate(['/']));
  }
}
