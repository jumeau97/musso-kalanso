import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
