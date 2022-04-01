import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { ListModuleByCategComponent } from 'src/app/list-module-by-categ/list-module-by-categ.component';
import { Categorie } from 'src/app/model/Categorie';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/test/Product';
import { NewCategorieComponent } from '../new-categorie/new-categorie.component';



@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  providers: [DialogService, MessageService, ConfirmationService]
})
export class ListCategoryComponent implements OnInit {

  products!: Product[];
  ref!: DynamicDialogRef;
  config!:DynamicDialogConfig
  http: any;
  listCategorie: any;
  display: boolean = false;
  uploadedImage!: File; 
  postResponse: any;
  successResponse: any;
  categorieSend: any;

  fg = this.fb.group({
    libelle : new FormControl('', [Validators.required]),
    photo : new FormControl('', [Validators.required])
  });

  @ViewChild('dt') dt: Table | undefined;

  constructor(
    public dialogService: DialogService,
    private categorieService: CategoryService,
    private confirmationService:ConfirmationService,
    private fb:FormBuilder,
    private messageService:MessageService
    ) {
      // console.log("data", this.config);
      
      this.findAllCateg();
     }

  ngOnInit(): void {
  }

  //save new categorie
  saveCategorie(){
    // =================
    //get file information
    const imageFormData = new FormData();
    imageFormData.append('file', this.uploadedImage);
    console.log("form data", this.uploadedImage.name);    

    //save....
    console.log("insert...", this.fg.value);
    this.categorieSend = this.fg.value;
    this.categorieSend.photo = this.uploadedImage.name
    this.categorieService.saveCategory(this.categorieSend).subscribe((data:any)=>{
      console.log("insert...", data);
      this.messageService.add({severity:'success', summary: 'Catégorie', detail: 'Enregistrer avec succès'});
      
    });

    //upload in folder
    this.categorieService.uploadFile(imageFormData).subscribe((data:any)=>{
      console.log("upload image", data);
      
    });
  }

  onImageUpload(event:any) { 
    this.uploadedImage = event.target.files[0];   
    }


  show() {
    this.ref = this.dialogService.open(NewCategorieComponent, {
        header: 'Ajouter une catégorie',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

  show1(event:any) {
    this.ref = this.dialogService.open(ListModuleByCategComponent, {
        header: 'Les modules',
        data:[event],
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

  show2(event:any) {
    this.ref = this.dialogService.open(NewCategorieComponent, {
        header: 'Modifier une catégorie',
        data: event,
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

  showDialog() {
    this.display = true;
}
  

  findAllCateg(){
    this.categorieService.findAllCateg().subscribe((data:any)=>{
      this.listCategorie=data.body;
    });

  }

  filterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }


    // method to  insert new category
    // saveCtegory(){
      // this.ref.close();
    //   console.log("category", this.fg.value);
    //   this.categorieService.saveCategory(this.fg.value).subscribe((data:any)=>{
    //     console.log("insert...", data);
    //     if(data['status']=="OK"){
    //       console.log("msg");
          
    //       this.messageService.add({severity:'success', summary: 'Categorie', detail: 'Enregistrer avec succès'});
    //       this.findAllCateg();
    //     }
        
    //   });
      
    // }

    //reject method
    onReject() {
      this.fg.reset();
      this.messageService.clear('c');
      
  }

  //publish category
  toPublish(event:any){

    this.confirmationService.confirm({
      message:'Voulez-vous publier cette categorie ?',
      header:'Demande de confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
    // method to publish category
    this.categorieService.toPublish(event.id).subscribe((data:any)=>{
      console.log("etat publié", data);
      this.findAllCateg();
      this.messageService.add({severity:"success", summary:"Categorie", detail:"publier"});
      
    });
      },
      reject : (type : any) =>{
       switch(type){
          case ConfirmEventType.REJECT:
            // this.messageService.add({severity:'error', summary:"Categorie", detail:"Rejet"});
            break;
          case ConfirmEventType.CANCEL:
            // this.messageService.add({severity:'success', summary:"categorie", detail:"Retour"});
       }
      }
    });
  }

    //unpublish category
    toUnpublish(event:any){

    this.confirmationService.confirm({
      message:'Voulez-vous dépublier cette categorie ?',
      header:'Demande de confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
      //method to unpublish category
      this.categorieService.ToUnpublish(event.id).subscribe((data:any)=>{
        console.log("etat non publié", data);
        this.findAllCateg();
        this.messageService.add({severity:"error", summary:"Categorie", detail:"dépublier"});
      });
      },
      reject : (type : any) =>{
       switch(type){
          case ConfirmEventType.REJECT:
            // this.messageService.add({severity:'error', summary:"Categorie", detail:"Rejet"});
            break;
          case ConfirmEventType.CANCEL:
            // this.messageService.add({severity:'success', summary:"categorie", detail:"Retour"});
       }
      }
    });
    }

    //delete category
    delete(event : any){
      this.confirmationService.confirm({
        message:'Voulez-vous supprimer cette categorie ?',
        header:'Demande de confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept:()=>{
        //method to delete category
        console.log("deleting", event);
        this.categorieService.deleteCategory(event.id).subscribe((data:any)=>{
          if(data['status']=="OK"){
            console.log("del", data);            
            this.messageService.add({severity:"success", summary:"Categorie", detail:"Suppression reussie"});
          }else{
            this.messageService.add({severity:"error", summary:"Categorie", detail:"Suppression annulée, merci de créer votre propre application"});
          }
          this.findAllCateg();
        });
        },
        reject : (type : any) =>{
         switch(type){
            case ConfirmEventType.REJECT:
              // this.messageService.add({severity:'error', summary:"Categorie", detail:"Rejet"});
              break;
            case ConfirmEventType.CANCEL:
              // this.messageService.add({severity:'success', summary:"categorie", detail:"Retour"});
         }
        }
      });

    }

}
