import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true,
    });
  }

}
