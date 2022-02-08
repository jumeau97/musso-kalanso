import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/services/test/Product';
import { ProductService } from 'src/app/services/test/product.service';
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
  constructor(
    public dialogService: DialogService,
     public messageService: MessageService,
     public productService: ProductService
    ) { }

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => this.products = data);
  }


  show() {
    this.ref = this.dialogService.open(NewCategorieComponent, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

}
