import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Apprenant } from 'src/app/model/Apprenant';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  myform=this.fb.group({
    nom_prenom:["", Validators.required],
    adresse:["", Validators.required],
    tel:["", Validators.required],
    email:["", Validators.required],
    motDePasse:["",Validators.required]
  });
  logInfos: boolean = true;
  constructor(private fb:FormBuilder, private AuthService : AuthService, private toast:ToastController, private router : Router) { }

  ngOnInit() {
  }

  saveLearner(){
    this.logInfos = true;
    console.log("Inscrit", this.myform.value);

    console.log("le formulaire", this.myform.value);
    this.AuthService.saveLearner(this.myform.value).subscribe((data:any)=>{
      console.log("save leraner...", data);
      if(data['status']=="OK"){
        console.log("save");
        this.saveAlert();
        this.router.navigate(["/login"]);
      }
      
    })
  }

  async saveAlert(){
    const toast = await this.toast.create({
      message:"Inscription reussie",
      color:"success",
      position:"bottom",
      duration:1000

    });

    toast.present();
  }

}
