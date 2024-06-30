import { FormControl, FormGroup } from '@angular/forms';
import { SpecialtyService } from './../../services/specialty/specialty.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Specialty } from '../../models/specialty';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { Advertisement } from '../../models/advertisement';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrl: './create-advertisement.component.scss'
})
export class CreateAdvertisementComponent {

  advertisement: Advertisement;

  specialties: Specialty[] | undefined = [];

  constructor(
    private router: Router,
    private specialtyService: SpecialtyService,
    private advertisementService: AdvertisementService
  ) {
    this.advertisement = new Advertisement;
    specialtyService.findAll().subscribe(specialties => this.specialties = specialties);
  }

  advertisementForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    specialties: new FormControl([]),
  });

  onSubmit() {
    this.advertisement.specialties = this.advertisement.specialties?.map(id => ({id}));
    this.advertisementService.insert(this.advertisement).subscribe();
  }

}
