import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { Advertisement } from '../../models/advertisement';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

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

  public minDate = new Date(this.year, this.month, this.day, 0, 0, 0);
  public maxDate = new Date(this.year, this.month + 2, this.day, 0, 0, 0);

  public dateControl = new FormControl(new Date(this.year, this.month, this.day, 6, 0, 0));

  constructor(
    private advertisementService: AdvertisementService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => this.id = param['id' as keyof Object]);
    this.advertisementService.findById(this.id).subscribe(advertisement => {
      this.advertisement = advertisement;
    });
  }
}
