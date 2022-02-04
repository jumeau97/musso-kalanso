import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { take } from 'rxjs/operators';
import { DescriptionPage } from 'src/app/admin/description/description.page';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: any;
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalController : ModalController,
    private router : Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if(!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }
      const id = paramMap.get('id');
      console.log(id);
      this.item = this.apiService.getItem(id);
      console.log(this.item);
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DescriptionPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }



}
