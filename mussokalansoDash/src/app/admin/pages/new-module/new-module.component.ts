import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categorie } from 'src/app/model/Categorie';
import { CategoryService } from 'src/app/services/category/category.service';
import { ModuleService } from 'src/app/services/module/module.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-new-module',
  templateUrl: './new-module.component.html',
  styleUrls: ['./new-module.component.scss'],
  providers: [MessageService]
})
export class NewModuleComponent implements OnInit {
  listAllCateg: any;
  category:Categorie = new Categorie();
  allFormer: any;
  uploadedImage!: File; 
  postResponse: any;
  successResponse: any;
  constructor(
    private fb:FormBuilder,
     private categService : CategoryService,
      private moduleServicr: ModuleService,
      private messageService: MessageService,
      private userService: UtilisateurService,
      private httpClient: HttpClient
      ) 
  {
    this.findAllCategory();
    this.findAllFormateur();
   }

  fgmodule = this.fb.group({
    libelle: ['', Validators.required],
    categorie: [this.category, Validators.required],
    description: ['', Validators.required],
    utilisateur: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  //save new module
  saveModule(){
    console.log("insert...", this.fgmodule.value);
    this.moduleServicr.saveModule(this.fgmodule.value).subscribe((data:any)=>{
      console.log("insert...", data);
      this.messageService.add({severity:'success', summary: 'Module', detail: 'Enregistrer avec succès'});
      
    });

    // =================
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
  

    this.httpClient.post('http://localhost:8080/api/mussokalanso/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) { 
          this.postResponse = response;                
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
     );
  }


  // find all category
  findAllCategory(){
    this.categService.findAllCateg().subscribe((data:any)=>{
      console.log("all category", data);
      this.listAllCateg=data.body;
      
    })
  }

  //find all formateur
  findAllFormateur(){
    this.userService.findAllFormer().subscribe((data:any)=>{
      console.log("les formateur", data);
      this.allFormer = data.body;
      
    })
  }

    //reject method
    onReject() {
      this.messageService.clear('c');
  }

  onImageUpload(event:any) { 
    this.uploadedImage = event.target.files[0];   
    }


  

}
