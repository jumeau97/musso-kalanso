import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  formUser=this.fb.group({
  "nomPrenom" : new FormControl('', [Validators.required]),
  "genre" : new FormControl('', Validators.required),
  "adresse" : new FormControl('', Validators.required),
  "description" : new FormControl('', Validators.required),
  "domaine" : new FormControl('', Validators.required),
  "email" : new FormControl('', Validators.required),
  "motDePasse" : new FormControl('123456', Validators.required),
  "profession" : new FormControl('', Validators.required),
  "statut" : new FormControl('', Validators.required),
  "tel" : new FormControl('', Validators.required),
})
  ngOnInit(): void {
  }

  saveUser(){
    console.log("save user", this.formUser.value);
    
  }

}
