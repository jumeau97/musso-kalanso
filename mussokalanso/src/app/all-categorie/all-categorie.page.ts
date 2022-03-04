import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from '../pages/tabs/home/service/home.service';

@Component({
  selector: 'app-all-categorie',
  templateUrl: './all-categorie.page.html',
  styleUrls: ['./all-categorie.page.scss'],
})
export class AllCategoriePage implements OnInit {
  listCategory: any;

  constructor(
    private homeService : HomeService,
    public navCtrl: NavController,)
   { 
     this.categoryPub();
   }

  ngOnInit() {
  }

  // all category published
  categoryPub(){
    this.homeService.getAllCategory().subscribe((data:any)=>{
      this.listCategory = data.body;
    })
  }

}
