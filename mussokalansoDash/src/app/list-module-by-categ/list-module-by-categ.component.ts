import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Categorie } from '../model/Categorie';
import { ProductService } from '../services/test/product.service';

@Component({
  selector: 'app-list-module-by-categ',
  templateUrl: './list-module-by-categ.component.html',
  styleUrls: ['./list-module-by-categ.component.scss']
})
export class ListModuleByCategComponent implements OnInit {
  listModule: any;
  categorie!:Categorie;
  constructor(
    private productService: ProductService,
    private config:DynamicDialogConfig,
    private messageService: MessageService,
  ) { 
    this.categorie=this.config.data[0];
    console.log("data", this.categorie);
    this.findAllModuleByCateg();
  }

  ngOnInit(): void {
  }

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

}
