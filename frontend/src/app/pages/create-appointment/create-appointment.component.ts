import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { Advertisement } from '../../models/advertisement';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.scss'
})
export class CreateAppointmentComponent {
  advertisement = new Advertisement();
  id: any;

  constructor(
    private advertisementService: AdvertisementService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => this.id = param['id' as keyof Object]);
    this.advertisementService.findById(this.id).subscribe(advertisement => this.advertisement = advertisement);
  }
}
