import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Module } from 'src/app/model/Module';
import { CategoryService } from 'src/app/services/category/category.service';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss'],
  providers:[MessageService]
})
export class UpdateModuleComponent implements OnInit {
  getId: any;
  detailMod: Module= new Module();
  listCateg: any;

  constructor(
    private activatedRoute : ActivatedRoute,
     private moduleService : ModuleService,
     private fb : FormBuilder,
     private categorieService : CategoryService,
     private messageService : MessageService,
     private router : Router,
     ) 
  {
    console.log("get id module", this.activatedRoute.snapshot.params.id);
    this.getId = this.activatedRoute.snapshot.params.id;
    //call method
    this.findModuleById();
    this.findAllCategorie();
  }

  formUpdate = this.fb.group({
    // libelle:[this.detailMod.libelle],
    libelle:['', Validators.required],
    description:[new FormControl('', [Validators.required])],
    categorie:new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
  }

  //find details module by id
  findModuleById(){
    this.moduleService.getModuleById(this.getId).subscribe((data:any)=>{
      console.log("deteils module", data.body);
      
     this.detailMod = data.body;
      
    })
  }

  //method to update module
  updateModule(){
    console.log("data", this.formUpdate.value);
    this.moduleService.updateModule(this.getId, this.formUpdate.value).subscribe((data:any)=>{
      console.log("update...", data);
      this.messageService.add({severity:"success", summary:"Categorie", detail:"Mise à jour reussie"});
      // this.router.navigateByUrl("/list/module");
    })
  }

  //method to find all categorie
  findAllCategorie(){
    this.categorieService.findAllCateg().subscribe((data:any)=>{
      console.log("all category", data);
      this.listCateg = data.body;
    });
  }
  
  //rejet
  onReject(){
    this.messageService.clear('c');
  }

}
