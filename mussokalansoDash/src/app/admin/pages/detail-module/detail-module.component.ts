import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapitreService } from 'src/app/services/chapitre/chapitre.service';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-detail-module',
  templateUrl: './detail-module.component.html',
  styleUrls: ['./detail-module.component.scss']
})
export class DetailModuleComponent implements OnInit {
  getIdModule: any;
  listChapter: any;
  module: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private chapterService:ChapitreService,
    private moduleService : ModuleService
    ) 
  {
    this.getIdModule=this.activatedRoute.snapshot.params.id;
    this.findChaptersByModule();
    this.getModuleById(this.getIdModule);
   }

  ngOnInit(): void {
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
      
    })
  }
}
