import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router : Router, private menu:MenuController) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem("session_auth");
    this.menu.close();
    this.router.navigateByUrl("/login");

  }

}
