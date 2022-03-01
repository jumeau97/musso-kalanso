import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email:['', Validators.required],
    motDePasse:['', Validators.required]
  });
  
  msgError!: boolean;
  constructor(private fb:FormBuilder, private userService : UtilisateurService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    // console.log("login... ");
    this.userService.login(this.loginForm.value).subscribe((data:any)=>{
      console.log("authentication...", data);
      if(data['status']=="OK"){
      localStorage.setItem("", JSON.stringify("current_dash_user"));   
      this.router.navigate(["/accueil"]);
      }else{
        this.msgError = true;
      }
    });
  }

}
