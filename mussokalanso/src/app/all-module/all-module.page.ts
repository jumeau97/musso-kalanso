import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from '../pages/tabs/home/service/home.service';

@Component({
  selector: 'app-all-module',
  templateUrl: './all-module.page.html',
  styleUrls: ['./all-module.page.scss'],
})
export class AllModulePage implements OnInit {
  listModule: any;

  constructor(
    private homeService : HomeService,
    public navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.allModulePub();
  }

  allModulePub(){
    this.homeService.allModulePublished().subscribe((data:any)=>{
      console.log("module published", data);
      this.listModule = data.body;
    })
  }
  

}
