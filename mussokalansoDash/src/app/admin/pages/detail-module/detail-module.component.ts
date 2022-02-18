import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Chapitre } from 'src/app/model/Chapitre';
import { ChapitreService } from 'src/app/services/chapitre/chapitre.service';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class DetailModuleComponent implements OnInit {
  getIdModule: any;
  listChapter: any;
  module: any;
  displayResponsive!: boolean;
  getChapter: Chapitre = new Chapitre();

  constructor(
    private activatedRoute: ActivatedRoute,
    private chapterService:ChapitreService,
    private moduleService : ModuleService,
    private confirmationService : ConfirmationService,
    private messageService : MessageService,
    private primengConfig : PrimeNGConfig,
    private fb : FormBuilder,
    ) 
  {
    this.getIdModule=this.activatedRoute.snapshot.params.id;
    this.findChaptersByModule();
    this.getModuleById(this.getIdModule);
   }

   formChap=this.fb.group({
    libelle:['', Validators.required],
    video:['', Validators.required],
    doc1:['', Validators.required],
    doc2:['', Validators.required],
    description:['', Validators.required],
    // module: [this.config.data[0]],
  });

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }


  findChaptersByModule(){
    this.chapterService.findChaptersByModule(this.getIdModule).subscribe((data:any)=>{
      console.log("liste des chapitres", data);
      this.listChapter = data.body;
      
    });
  }

  //get details module

  getModuleById(id:any){
    this.moduleService.getModuleById(id).subscribe((data:any)=>{
      console.log("details module", data);
      this.module = data.body;
      
    });
  }

  //open popup to update
  updateChapter(event:any){
    console.log("update", event);
    this.getChapter = event;
    this.displayResponsive = true;
  }

  //update chapter
  sendChapter(){
    // console.log("sending", this.formChap.value);
    this.chapterService.updateChapter(this.formChap.value, this.getChapter.id).subscribe((data:any)=>{
      console.log("sending ok", data);
      this.messageService.add({severity:"success",summary:"Chapitre", detail:"Mise à jour reussie"});
      this.displayResponsive = false;
      
    });
  }

  //delete chapter
  deleteChapter(event : any){
    this.confirmationService.confirm({
      header:"Chapitre",
      message:"Vouslez-vous vraiment supprimer ce chapitre ?",
      icon: 'pi pi-exclamation-triangle',
      accept : ()=>{
        this.chapterService.deletechapter(event.id).subscribe((data:any)=>{
          console.log("deleting...", data);
          this.findChaptersByModule();
          this.messageService.add({severity:"success", summary:"Chapitre", detail:"Supprimer avec succès"});
        })   
      },
      reject : ()=>{
        // this.messageService.add({severity:"success", summary:"Chapitre", detail:"Supprimer avec succès"});
      }
    })
  }

  //Reject
  onReject(){
    this.messageService.clear('c');
  }
}
