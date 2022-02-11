import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { take } from 'rxjs/operators';
import { DescriptionPage } from 'src/app/admin/description/description.page';
import { HomeService } from '../home/service/home.service';
import { Module } from 'src/app/model/Module';
import { Subscribe } from 'src/app/model/payload/Subscribe';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: any;
  module:Module;
  subscribe:Subscribe = new Subscribe();
  guest: any;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalController : ModalController,
    private router : Router,
    private homeService:HomeService,
    private alertController:AlertController,
  ) 
  { 
    console.log("session", JSON.parse(localStorage.getItem("session_auth")));
    this.guest = JSON.parse(localStorage.getItem("session_auth"))
  }

  ngOnInit() {
    this.getDetailsModuleByid();
  }

  // get details module by id
  getDetailsModuleByid(){
  

    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if(!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }
      const id = paramMap.get('id');
      console.log(id);
      this.homeService.getDetailsModuleById(id).subscribe((data:any)=>{
        console.log("details module", data.body);
        this.module=data.body;
        
      })
    });
  }

  async presentModal(event:any) {
    console.log("cool", event);
    
  const alert = await this.alertController.create({
    cssClass:'',
    header:'Description',
    message:event.description,
  });

  await alert.present();

  }

  // learner subscribe on module
  subscribeIn(event:any){
    console.log("s'inscrire sur", event);
    this.subscribe.module=event;
    this.subscribe.apprenant = this.guest;
    console.log("subscribe", this.subscribe);
    this.homeService.subscribeLerner(this.subscribe).subscribe((data:any)=>{
      console.log("inscription.... OK", data);  
    });
  }

  getApprenantByModuleSubs(){
    this.homeService.getApprenantByModuleSubs(this.subscribe).subscribe((data:any)=>{
      console.log("check if user's connected!", data);
      
    });

  }



}
