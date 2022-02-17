import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ModuleService } from 'src/app/services/module/module.service';

@Component({
  selector: 'app-detail-learner',
  templateUrl: './detail-learner.component.html',
  styleUrls: ['./detail-learner.component.scss'],
  providers:[MessageService,],
})
export class DetailLearnerComponent implements OnInit {
  getLearner: any;
  learnerMods: any;

  constructor(
    private messageService:MessageService,
    private dynamicDialog:DynamicDialogConfig,
    private moduleService:ModuleService,
     ) {
  console.log("get learner", this.dynamicDialog.data);
  this.getLearner = this.dynamicDialog.data[0];
  this.findLearnerMods(this.getLearner);
   }

  ngOnInit(): void {
  }

   //reject method
   onReject() {
    this.messageService.clear('c');
}

  //find different modules that learner is subscribe
  findLearnerMods(learner:any){
    this.moduleService.getLearnerMods(learner).subscribe((data:any)=>{
      console.log("modules", data);
      this.learnerMods = data.body
    })
  }

}
