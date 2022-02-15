import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/services/test/Product';
import { ProductService } from 'src/app/services/test/product.service';
import { NewCategorieComponent } from '../new-categorie/new-categorie.component';

@Component({
  selector: 'app-list-learner',
  templateUrl: './list-learner.component.html',
  styleUrls: ['./list-learner.component.scss'],
  providers:[DialogService, MessageService]
})
export class ListLearnerComponent implements OnInit {
  ref!:DynamicDialogRef;
  products!:Product[];
  listLearn: any;
  constructor(
    private productService: ProductService,
    private dialogService:DialogService,
    ) 
    {
      this.findAllLearn();
     }

  ngOnInit(): void {
    // this.productService.getProductsSmall().then(data => this.products = data);
  }


  detailsModule(){
    this.ref = this.dialogService.open(NewCategorieComponent, {
      header: 'Nouveau apprenant',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  console.log("bonkour");
  
  }
  

  findAllLearn(){
    this.productService.findAllLearner().subscribe((data:any)=>{
      console.log("la liste des apprenants", data);
      this.listLearn=data.body;
      
    })
  }

  

}
