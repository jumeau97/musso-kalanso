import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/test/product.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  listUser: any;
  ref: any;

  constructor(private productService: ProductService,) { 
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

}
