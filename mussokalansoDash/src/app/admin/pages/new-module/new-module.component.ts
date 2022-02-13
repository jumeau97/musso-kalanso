import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categorie } from 'src/app/model/Categorie';
import { CategoryService } from 'src/app/services/category/category.service';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.scss'],
  providers: [MessageService]
})
export class NewModuleComponent implements OnInit {
  listAllCateg: any;
  category:Categorie = new Categorie();
  constructor(
    private fb:FormBuilder,
     private categService : CategoryService,
      private moduleServicr: ModuleService,
      private messageService: MessageService
      ) 
  {
    this.findAllCategory();
   }

  fgmodule = this.fb.group({
    libelle: ['', Validators.required],
    categorie: [this.category, Validators.required],
    description: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  //save new module
  saveModule(){
    console.log("insert...", this.fgmodule.value);
    this.moduleServicr.saveModule(this.fgmodule.value).subscribe((data:any)=>{
      console.log("insert...");
      this.messageService.add({severity:'success', summary: 'Module', detail: 'Enregistrer avec succès'});
      
    })
  }


  // find all category
  findAllCategory(){
    this.categService.findAllCateg().subscribe((data:any)=>{
      console.log("all category", data);
      this.listAllCateg=data.body;
      
    })
  }

    //reject method
    onReject() {
      this.messageService.clear('c');
  }

}
