import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  currentUser: any;

  constructor(private router : Router) 
  { 
    this.currentUser = JSON.parse(localStorage.getItem("current_dash_user") || "");
    console.log("current user", this.currentUser);
    
  }

  ngOnInit(): void {
  }
  
  logout(){  
    this.router.navigate(["/"]);
    localStorage.removeItem("current_dash_user");
  }


}
