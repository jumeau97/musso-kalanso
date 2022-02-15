import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Categorie } from '../model/Categorie';
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
  constructor(
    private productService: ProductService,
    private config:DynamicDialogConfig,
    private messageService: MessageService,
    public ref : DynamicDialogRef,
    private router : Router,
  ) { 
    this.categorie=this.config.data[0];
    console.log("data", this.categorie);
    this.findAllModuleByCateg();
  }

  // ngOnInit(): void {
  // }

  findAllModuleByCateg(){
    this.productService.findAllModuleByCateg(this.categorie).subscribe((data:any)=>{
      this.listModule=data.body;
      console.log("module", data.body);
      
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

}
