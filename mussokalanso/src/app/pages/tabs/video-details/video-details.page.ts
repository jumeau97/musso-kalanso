import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 1.3,
  };
  popularItems: any[] = [];
  featuredItems: any[] = [];
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.popularItems = this.apiService.items;
    this.featuredItems = this.apiService.items;
  }

}
