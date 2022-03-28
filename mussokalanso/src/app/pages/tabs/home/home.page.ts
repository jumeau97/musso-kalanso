import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { HomeService } from './service/home.service';

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
  listLastModule: any;
  listCategory: any;


  constructor(public apiService: ApiService, private menu:MenuController, private homeService:HomeService,) { }

  ngOnInit() {
    this.popularItems = this.apiService.items;
    this.featuredItems = this.apiService.items;
    // Call method after execution
    this.getLastFourModule();
    this.getAllCategory();
  }

  // open menu
  openMenu(){
    this.menu.open();
    }

  getLastFourModule(){
    this.homeService.getLastFourModule().subscribe((data:any)=>{
      this.listLastModule=data.body;
      console.log("les quatres derniers modules", this.listLastModule);
      
    });
  }

  // find all category
  getAllCategory(){
    this.homeService.getAllCategory().subscribe((data:any)=>{
      this.listCategory=data.body;

      console.log("list of category", this.listCategory);
      
    })
  }

  

}
