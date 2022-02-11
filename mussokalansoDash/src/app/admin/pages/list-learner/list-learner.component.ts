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
  constructor(
    private productService: ProductService,
    private dialogService:DialogService,
    ) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);
  }


  detailsModule(){
    this.ref = this.dialogService.open(NewCategorieComponent, {
      header: 'Choose a Product',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  console.log("bonkour");
  
  }

}
