import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HomeService } from '../pages/tabs/home/service/home.service';

@Component({
  selector: 'app-detail-chapitre',
  templateUrl: './detail-chapitre.page.html',
  styleUrls: ['./detail-chapitre.page.scss'],
})
export class DetailChapitrePage implements OnInit {

  listChapitre: any;
  chapitre: any;
  blob: Blob;

  constructor(
     public navCtrl: NavController,
      private homeService: HomeService,
       private activatedRoute : ActivatedRoute,
       private alertController : AlertController
       ) { }

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

  async download(data:any){
    const filename=data;

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmation!',
      message: 'Prêt pour télécharger le document !!!',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Continuer',
          id: 'confirm-button',
          handler: () => {
            console.log("filename", data);
    
            this.homeService.getPdf(filename).subscribe((data:any) => {
        
              this.blob = new Blob([data], {type: 'application/pdf'});
            
              var downloadURL = window.URL.createObjectURL(data);
              var link = document.createElement('a');
              link.href = downloadURL;
              link.download = filename;
              link.click();
            
            });
          }
        }
      ]
    });

    await alert.present();

  }
  
}

