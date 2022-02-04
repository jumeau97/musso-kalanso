import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  motDePasse: new FormControl('', [Validators.required])
});
  constructor(private authService:AuthService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((data:any)=>{
      console.log("authentication...", data);
      if(data['status']=="OK"){
        console.log("ok");
        localStorage.setItem("session_auth",JSON.stringify(data.body));
        this.router.navigateByUrl("");
      }else{
        console.log("not ok");
        
      }
      
    })
  }

}
