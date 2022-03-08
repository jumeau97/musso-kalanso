import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Categorie } from '../model/Categorie';
import { ModuleService } from '../services/module/module.service';
import { ProductService } from '../services/test/product.service';

@Component({
  selector: 'app-list-module-by-categ',
  templateUrl: './list-module-by-categ.component.html',
  styleUrls: ['./list-module-by-categ.component.scss']
})
export class ListModuleByCategComponent implements OnDestroy {
  listModule: any;
  // ref!:DynamicDialogRef;
  categorie!:Categorie;
  @ViewChild('dt') dt: Table | undefined;
  
  constructor(
    private productService: ProductService,
    private config:DynamicDialogConfig,
    private messageService: MessageService,
    public ref : DynamicDialogRef,
    private router : Router,
    private confirmationService:ConfirmationService,
    private moduleService:ModuleService,
  ) { 
    this.categorie=this.config.data[0];
    console.log("data", this.categorie);
    this.findAllModuleByCateg();
  }

  // ngOnInit(): void {
  // }

  findAllModuleByCateg(){
    this.productService.findAllModuleByCategC(this.categorie).subscribe((data:any)=>{
      this.listModule=data.body;
      console.log("module true or false", data.body);
      
    })

  }
  //reject method
  onReject() {
    this.messageService.clear('c');
}

//redirect ro module detail
redirectDetail(){
this.router.navigate(["/list/module"]);
this.ref.close();
}

ngOnDestroy(){
  if(this.ref){
    this.ref.close();
  }
}

filterGlobal($event:any, stringVal:any) {
  this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
}

 //publish module
  toPublish(event:any){

    this.confirmationService.confirm({
      message:'Voulez-vous publier ce module ?',
      header:'Demande de confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
    // method to publish module
    this.moduleService.toPublish(event.id).subscribe((data:any)=>{
      console.log("etat publié", data);
      this.findAllModuleByCateg();
      this.messageService.add({severity:"success", summary:"Module", detail:"publier"});
      
    });
      },
      reject : (type : any) =>{
       switch(type){
          case ConfirmEventType.REJECT:
            // this.messageService.add({severity:'error', summary:"Module", detail:"Rejet"});
            break;
          case ConfirmEventType.CANCEL:
            // this.messageService.add({severity:'success', summary:"module", detail:"Retour"});
       }
      }
    });
  }


   //unpublish module
   toUnpublish(event:any){

    this.confirmationService.confirm({
      message:'Voulez-vous dépublier ce module?',
      header:'Demande de confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept:()=>{
      //method to unpublish module
      this.moduleService.toUnpublish(event.id).subscribe((data:any)=>{
        console.log("etat non publié", data);
        this.findAllModuleByCateg();
        this.messageService.add({severity:"error", summary:"Module", detail:"dépublier"});
      });
      },
      reject : (type : any) =>{
       switch(type){
          case ConfirmEventType.REJECT:
            // this.messageService.add({severity:'error', summary:"Module", detail:"Rejet"});
            break;
          case ConfirmEventType.CANCEL:
            // this.messageService.add({severity:'success', summary:"module", detail:"Retour"});
       }
      }
    });
    }

}
