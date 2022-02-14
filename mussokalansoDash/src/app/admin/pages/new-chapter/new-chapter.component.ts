import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ChapitreService } from 'src/app/services/chapitre/chapitre.service';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.scss']
})
export class NewChapterComponent implements OnInit {
  //  getmodule: any;
  uploadedFiles: any[] = [];


  
  constructor(private fb:FormBuilder, private config : DynamicDialogConfig, private chapterService:ChapitreService) 
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
    console.log("save chapter", this.formChap.value);
    this.chapterService.saveChapter(this.formChap.value).subscribe((data)=>{
      console.log("save chapter", data);
      
    });
  }

  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

}

}
