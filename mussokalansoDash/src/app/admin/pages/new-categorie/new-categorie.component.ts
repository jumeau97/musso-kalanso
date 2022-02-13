import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
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


  constructor(private fb:FormBuilder, private categService:CategoryService, private messageService:MessageService) { }

  ngOnInit(): void {
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
      }
      
    });
    
  }
  //reject method
  onReject() {
    this.messageService.clear('c');
}


}
