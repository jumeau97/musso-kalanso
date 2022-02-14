import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ListModuleByCategComponent } from 'src/app/list-module-by-categ/list-module-by-categ.component';
import { Categorie } from 'src/app/model/Categorie';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/services/test/Product';
import { NewCategorieComponent } from '../new-categorie/new-categorie.component';



@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
  providers: [DialogService, MessageService]
})
export class ListCategoryComponent implements OnInit {

  products!: Product[];
  ref!: DynamicDialogRef;
  config!:DynamicDialogConfig
  http: any;
  listCategorie: any;

  constructor(
    public dialogService: DialogService,
    private categorieService: CategoryService,
    // private config : DynamicDialogConfig,
    ) {
      // console.log("data", this.config);
      
      this.findAllCateg();
     }

  ngOnInit(): void {
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
  

  findAllCateg(){
    this.categorieService.findAllCateg().subscribe((data:any)=>{
      this.listCategorie=data.body;
    })

  }

  

}
