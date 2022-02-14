import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModuleService } from 'src/app/services/module/module.service';
import { NewChapterComponent } from '../new-chapter/new-chapter.component';
import { NewModuleComponent } from '../new-module/new-module.component';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss'],
  providers: [DialogService]
})
export class ListModuleComponent implements OnInit {

  ref!:DynamicDialogRef
  listModule: any;
  constructor(private dialogService:DialogService, private moduleService:ModuleService) 
  { 
    this.findAllModule();
  }

  ngOnInit(): void {
  }

  // all module
  findAllModule(){
    this.moduleService.findAllModule().subscribe((data:any)=>{
      this.listModule = data.body;
    })
  }

  addChapter(event:any){
    this.ref = this.dialogService.open(NewChapterComponent, {
      header: 'Nouveau chapitre',
      data:[event],
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });
  }



}
