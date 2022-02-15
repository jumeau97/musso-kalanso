import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { DetailUserComponent } from 'src/app/detail-user/detail-user.component';
import { ProductService } from 'src/app/services/test/product.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
  providers: [DialogService, MessageService]
})
export class ListUserComponent implements OnInit {
  listUser: any;
  // ref: any;
  ref!: DynamicDialogRef;
  @ViewChild('dt') dt: Table | undefined;

  constructor(
    private productService: ProductService,
    public dialogService: DialogService,) { 
    this.findAllUser();
  }

  ngOnInit(): void {
  }

  findAllUser(){
    this.productService.findAllUser().subscribe((data:any)=>{
      console.log("la liste des utilisteurs", data);
      this.listUser=data.body;
      
    })
  }

  filterGlobal($event:any, stringVal:any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

  show() {
    this.ref = this.dialogService.open(DetailUserComponent, {
        header: 'Detail Utilisateur',
        width: '70%',
        contentStyle: {"max-height": "500px", "overflow": "auto"},
        baseZIndex: 10000
    });

  }

}
