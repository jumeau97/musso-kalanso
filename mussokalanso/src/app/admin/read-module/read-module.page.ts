import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-read-module',
  templateUrl: './read-module.page.html',
  styleUrls: ['./read-module.page.scss'],
})
export class ReadModulePage implements OnInit {
  item: any;
  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

}
