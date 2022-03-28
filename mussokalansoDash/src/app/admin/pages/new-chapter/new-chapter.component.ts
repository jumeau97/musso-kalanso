import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Chapitre } from 'src/app/model/Chapitre';
import { ChapitreService } from 'src/app/services/chapitre/chapitre.service';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.scss'],
  providers:[MessageService]
})
export class NewChapterComponent implements OnInit {
  //  getmodule: any;
  uploadedFiles: any[] = [];
  myFiles: File[] =[];
  chapter!:Chapitre


  
  constructor(
    private fb:FormBuilder,
    private config : DynamicDialogConfig,
    private chapterService:ChapitreService,
    private httpClient:HttpClient,
    private messageService :MessageService,
      ) 
  {
    // this.getmodule=this.config.data;
    console.log("get module", this.config.data);
    
   }
  formChap=this.fb.group({
    libelle:['', Validators.required],
    video:['', Validators.required],
    doc1:['', Validators.required],
    doc2:['', Validators.required],
    description:['', Validators.required],
    module: [this.config.data[0]],
  });
  ngOnInit(): void {
  }

  saveChapter(){
    const imageFormData = new FormData();

    // parcourir les fichiers
    if(this.myFiles.length == 2){
      for (var i = 0; i < this.myFiles.length; i++) { 
        imageFormData.append("files", this.myFiles[i]);
        console.log("name", this.myFiles[i].name);
        this.chapter = this.formChap.value;
        this.chapter.doc1=this.myFiles[0].name;
        this.chapter.doc2=this.myFiles[1].name;
      }
     //upload to folder method
      this.httpClient.post('http://localhost:8080/multiple/uploads', imageFormData)
      .subscribe((response) => {
        console.log("bonjour", response);
      }
      );

       //save method
      console.log("save chapter", this.chapter);
      this.chapterService.saveChapter(this.formChap.value).subscribe((data)=>{
        console.log("save chapter", data);
        this.messageService.add({severity:"success", summary:"Chapitre", detail:"Insertion reussie"}); 
        
      });
  
    }else{
      console.log("upload two file");
      
    }

  }

  public onImageUpload(event:any) {    
    this.myFiles = [];
    for (var i = 0; i < event.target.files.length; i++) { 
      
      this.myFiles.push(event.target.files[i]);
    }
    console.log("upload",this.myFiles);
    
  }

    //reject method
    onReject() {
      this.messageService.clear('c');
  }




  imageUploadAction() {    
   
    // console.log("pther upload", imageFormData);
    
  


    }

//   onUpload(event:any) {
//     for(let file of event.files) {
//         this.uploadedFiles.push(file);
//     }

// }

}
