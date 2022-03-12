import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from 'src/app/pages/tabs/home/service/home.service';

@Component({
  selector: 'app-read-module',
  templateUrl: './read-module.page.html',
  styleUrls: ['./read-module.page.scss'],
})
export class ReadModulePage implements OnInit {

  listChapitre: any;
  module: any;

  constructor(private navCtrl : NavController, private homeService: HomeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.detailModule();
  }
  

  detailModule(){
      
        this.homeService.getChapitreByModule(this.activatedRoute.snapshot.params.id).subscribe((data:any)=>{
          console.log("the chapitre of current module", data);
          this.listChapitre = data.body;
          console.log("list chapitre", this.listChapitre);
          
        });
    
  }
}



