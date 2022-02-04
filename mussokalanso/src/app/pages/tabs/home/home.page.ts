import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    slidesPerView: 2.2,
  };
  slideOpts1 = {
    slidesPerView: 1.3,
  };
  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService, private menu:MenuController) { }

  ngOnInit() {
    this.popularItems = this.apiService.items;
    this.featuredItems = this.apiService.items;
  }

  // open menu
  openMenu(){
    this.menu.open();
    }

}
