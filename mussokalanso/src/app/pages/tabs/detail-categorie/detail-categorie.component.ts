import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { HomeService } from '../home/service/home.service';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.scss'],
})
export class DetailCategorieComponent implements OnInit {
  category: any;
  listModule: any;

  constructor(private homeService : HomeService, private activatedRoute : ActivatedRoute, public navCtrl: NavController,) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params.id);
    this.detailsCategory();
    
  }

  detailsCategory(){
    this.homeService.getCategoryById(this.activatedRoute.snapshot.params.id).subscribe((data:any)=>{
      console.log("get category", data);
      this.category= data.body;
      console.log("category", this.category);
      
      if(data['status']=="OK"){
        this.homeService.getModuleByCategory(this.category).subscribe((data:any)=>{
          console.log("the module of current category", data);
          this.listModule = data.body;
          console.log("list module", this.listModule);
          
        });
      }
    })
  }

  // findAllCategoryPublished(){
  //   this.
  // }

}
