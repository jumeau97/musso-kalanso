import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { take } from 'rxjs/operators';
import { DescriptionPage } from 'src/app/admin/description/description.page';
import { HomeService } from '../home/service/home.service';
import { Module } from 'src/app/model/Module';
import { Subscribe } from 'src/app/model/payload/Subscribe';
import { Inscription } from 'src/app/model/Inscription';
import { Utilisateur } from 'src/app/model/Utilisateur';

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
  isSubs: boolean = false;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalController : ModalController,
    private router : Router,
    private homeService:HomeService,
    private alertController:AlertController,
    private toastController : ToastController,
  ) 
  { 
    console.log("session", JSON.parse(localStorage.getItem("session_auth")));
    //guest information from localstorage
    this.guest = JSON.parse(localStorage.getItem("session_auth"));
  }

  ngOnInit() {
    this.getDetailsModuleByid();
    console.log("get is", this.route.snapshot.params.id);

    this.getApprenantByModuleSubs(this.guest.id, this.route.snapshot.params.id);
    
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

  //popup formateur
  async infosFormateur(event :any){
    const alert = await this.alertController.create({
      cssClass:'',
      header:'Formateur',
      message:event.utilisateur.nomPrenom+"<br> Profession:"+event.utilisateur.profession+"<br> E-mail:"+event.utilisateur.email,
    });
    await alert.present();
  }

//get subscribe through learner and module
  getApprenantByModuleSubs(id, idm){
    this.homeService.getApprenantByModuleSubs(id, idm).subscribe((data:any)=>{
      console.log("check subscription, if user's connected!", data);
      if(data['status']=="OK"){
        this.isSubs = true;
      }
      
    });

  }

  // learner subscribe on module
  async subsAlert(event:any){
    const alert = await this.alertController.create({
      header:"INSCRIPTION",
      message:"Voulez-vous vraiment vous inscrire sur ce module ?",
      buttons:[
        {
          text:'Non',
          role:'cancel',
          handler:()=>{
            console.log("retour");
          }
        },
        {
          text:'Oui',
          handler:()=>{
            // console.log("OK...");
            console.log("s'inscrire sur", event);
            this.subscribe.module=event;
            this.subscribe.apprenant = this.guest;
            console.log("subscribe", this.subscribe);
            //call subscription method
            this.homeService.subscribeLerner(this.subscribe).subscribe((data:any)=>{
              console.log("inscription.... OK", data);  
              if(data["status"]=="OK"){
                this.toastSubs();
                this.getApprenantByModuleSubs(this.guest.id, this.route.snapshot.params.id);
              }
            });
            
          }
        }
      ]
    });
    await alert.present();
  }

  
  async toastSubs(){
    const toast = await this.toastController.create({
      message:'inscription reussie !',
      color:'success',
      duration:2000
    });
    toast.present();
  }



}
