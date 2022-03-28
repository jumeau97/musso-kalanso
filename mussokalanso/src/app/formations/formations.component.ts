import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HomeService } from '../pages/tabs/home/service/home.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  currentUser: any;
  myModules: any;
  public filterTerm: any;

  constructor(private navCtrl : NavController, private homeService : HomeService) { 
    this.currentUser = JSON.parse(localStorage.getItem("session_auth" || ""));
    this.getLearnerModules();
  }

  ngOnInit() {}

  getLearnerModules(){
    this.homeService.getLearnerModules(this.currentUser).subscribe((data:any)=>{
      console.log("learner modules", data);
      this.myModules = data.body;
    })
  }
}
