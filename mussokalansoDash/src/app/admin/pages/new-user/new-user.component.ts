import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [MessageService]
})
export class NewUserComponent implements OnInit {
User: Utilisateur = new Utilisateur();
  constructor(private fb:FormBuilder, private userService : UtilisateurService, private messageService : MessageService) { }
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
    this.User=this.formUser.value;
    console.log("save user", this.User);
    this.userService.saveUser(this.User).subscribe((data:any)=>{
      console.log("save user", data);
      this.messageService.add({severity:'success', summary: 'Utilisateur', detail: 'Enregistrer avec succès'});
      
    });

    
  }

    //reject method
    onReject() {
      this.messageService.clear('c');
  }

}
