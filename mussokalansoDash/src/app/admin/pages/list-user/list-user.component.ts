import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { DetailUserComponent } from 'src/app/detail-user/detail-user.component';
import { Utilisateur } from 'src/app/model/Utilisateur';
import { ProductService } from 'src/app/services/test/product.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService]
})
export class ListUserComponent implements OnInit {
  listUser: any;
  // ref: any;
  ref!: DynamicDialogRef;
  @ViewChild('dt') dt: Table | undefined;
  displayBasic: boolean = false;
  getUser: Utilisateur = new Utilisateur();

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,
    private fb : FormBuilder,
    private userService : UtilisateurService,
    private messageService : MessageService,
    private confirmationService : ConfirmationService,
    ) { 
    this.findAllUser();
  }

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
  });

  ngOnInit(): void {
  }

  // find all user
  findAllUser(){
    this.productService.findAllUser().subscribe((data:any)=>{
      console.log("la liste des utilisteurs", data);
      this.listUser=data.body;
      
    })
  }

  // to filter elemnt of table
  filterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  // show detail component popup
  show(event:any) {
    this.ref = this.dialogService.open(DetailUserComponent, {
        header: 'Detail Utilisateur',
        data:[event],
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

  //update user
  updateUser(event :any){
    this.displayBasic=true;
    this.getUser = event;
    
  }

  //delete user
  deleteUser(event : any){
    this.confirmationService.confirm({
      header:"Demande de confirmation",
      icon:"pi pi-exclamation-triangle",
      message:"Voulez-vous supprimer cet utilisateur ?",
      accept:()=>{
        this.userService.deleteUser(event.id).subscribe((data:any)=>{
          console.log("delete", data);
          this.findAllUser();
          this.messageService.add({severity:"success",summary:"Utilisateur", detail:"Suppression reussie!"})
        });
      },
      reject:()=>{

      }
    })
  }

  saveUser(){
    this.userService.updateUser(this.formUser.value, this.getUser.id).subscribe((data:any)=>{
      console.log("updating...", data);   
        this.messageService.add({severity:"success", summary:"Utilisateur", detail:"Mise à jour reussie"})
    });
   
  }

  //reject
  onReject(){
    this.messageService.clear("c");
  }

}
