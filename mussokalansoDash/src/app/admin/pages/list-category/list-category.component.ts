import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
  providers: [DialogService, MessageService]
})
export class ListCategoryComponent implements OnInit {

  products!: Product[];
  ref!: DynamicDialogRef;
  config!:DynamicDialogConfig
  http: any;
  listCategorie: any;
  display: boolean = false;

  fg = this.fb.group({
    libelle : new FormControl('', [Validators.required])
  });

  @ViewChild('dt') dt: Table | undefined;

  constructor(
    public dialogService: DialogService,
    private categorieService: CategoryService,
    // private config : DynamicDialogConfig,
    private categService:CategoryService,
    private fb:FormBuilder,
    private messageService:MessageService
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

  show2() {
    this.ref = this.dialogService.open(NewCategorieComponent, {
        header: 'Modifier une catégorie',
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
    saveCtegory(){
      // this.ref.close();
      console.log("category", this.fg.value);
      this.categService.saveCategory(this.fg.value).subscribe((data:any)=>{
        console.log("insert...", data);
        if(data['status']=="OK"){
          console.log("msg");
          
          this.messageService.add({severity:'success', summary: 'Categorie', detail: 'Enregistrer avec succès'});
          this.findAllCateg();
        }
        
      });
      
    }

    //reject method
    onReject() {
      this.fg.reset();
      this.messageService.clear('c');
      
  }

  //publish category
  toPublish(event:any){
    this.categService.toPublish(event.id).subscribe((data:any)=>{
      console.log("etat publié", data);
      this.findAllCateg();
      this.messageService.add({severity:"success", summary:"Categorie", detail:"publier"});
      
    })
  }

    //unpublish category
    toUnpublish(event:any){
    this.categService.ToUnpublish(event.id).subscribe((data:any)=>{
      console.log("etat non publié", data);
      this.findAllCateg();
      this.messageService.add({severity:"error", summary:"Categorie", detail:"dépublier"});
    })
    }

}
