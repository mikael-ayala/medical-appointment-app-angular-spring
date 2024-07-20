import { Component } from '@angular/core';
import { AdvertisementService } from '../../services/advertisement/advertisement.service';
import { Advertisement } from '../../models/advertisement';
import { Specialty } from '../../models/specialty';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrl: './advertisements.component.scss'
})
export class AdvertisementsComponent {
  advertisements: any = [];
  totalElements: any = 0;
  pageSize: any = 0;
  currentPage: any = 0;

  constructor(private advertisementService: AdvertisementService) {}

  ngOnInit() {
    this.getAdvertisements();
  }

  private getAdvertisements() {
      this.advertisementService.findAll().subscribe(data => {
      this.currentPage = data['pageable' as keyof Object]['pageNumber' as keyof Object];
      this.pageSize = data['size' as keyof Object];
      this.totalElements = data['totalElements' as keyof Object];

      this.advertisements = data['content' as keyof Object];

      this.advertisements.map((advertisement: Advertisement) => {
        advertisement.specialties?.map((specialty: Specialty, index) => {
          advertisement.specialties?.splice(index, 1, specialty.name);
        });
      });
    });
  }

  private changePageAdvertisements(currentPage: string) {
    this.advertisementService.findAll(currentPage).subscribe(data => {
      this.advertisements = data['content' as keyof Object];

      this.advertisements.map((advertisement: Advertisement) => {
        advertisement.specialties?.map((specialty: Specialty, index) => {
          advertisement.specialties?.splice(index, 1, specialty.name);
        });
      });

      window.scroll({top: 0, behavior: 'smooth'});})
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.changePageAdvertisements(this.currentPage);
  }
}
