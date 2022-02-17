import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.scss'],
  providers:[DialogService, MessageService],
})
export class NewCategorieComponent implements OnInit {
  ref!: DynamicDialogRef;

  fg = this.fb.group({
    libelle : ['', Validators.required]
  });
  getCategory: any;


  constructor(
    private fb:FormBuilder,
    private categService:CategoryService, 
    private messageService:MessageService,
    private dynamicDialogConfig : DynamicDialogConfig,
    private DynamicDialogRef:DynamicDialogRef
    ) 
    {
      // get category 
      this.getCategory = this.dynamicDialogConfig.data;
     }

  ngOnInit(): void {
  }

  // method to  update new category
  updateCategory(){
    this.categService.updateCategory(this.getCategory, this.getCategory.id).subscribe((data:any)=>{
      console.log("updating...", data);   
      this.messageService.add({severity:"success", summary:"Catégorie", detail:"Mise à jour reussie"}); 
      // this.DynamicDialogRef.close();
    });
  }
  //reject method
  onReject() {
    this.messageService.clear('c');
}


}
