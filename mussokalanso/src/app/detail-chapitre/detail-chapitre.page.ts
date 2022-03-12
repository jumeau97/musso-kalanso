import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../pages/tabs/home/service/home.service';

@Component({
  selector: 'app-detail-chapitre',
  templateUrl: './detail-chapitre.page.html',
  styleUrls: ['./detail-chapitre.page.scss'],
})
export class DetailChapitrePage implements OnInit {

  listChapitre: any;
  chapitre: any;

  constructor( public navCtrl: NavController, private homeService: HomeService, private activatedRoute : ActivatedRoute,) { }

  ngOnInit() {
    this.allChapitre();
    this.detailsChapitre();

  }

  allChapitre(){
    this.homeService.getAllChapitre().subscribe((data:any)=>{
      this.listChapitre = data.body;
    })
  }
  detailsChapitre(){
    this.homeService.getDetailsChapitreById(this.activatedRoute.snapshot.params.id).subscribe((data:any)=>{
      this.chapitre= data.body;
      console.log("chapitre", this.chapitre);

    });
  }

  playVideo(id:number){
    this.homeService.getDetailsChapitreById(id).subscribe((data:any)=>{
      this.chapitre= data.body;
      console.log("chapitre", this.chapitre);

    });
  }


}

