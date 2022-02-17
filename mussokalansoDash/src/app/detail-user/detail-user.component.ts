import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
  providers:[DialogService, MessageService],
})
export class DetailUserComponent implements OnInit {

  ref!: DynamicDialogRef;
  getUser: any;

  constructor( private messageService:MessageService, private DynamicDialogConfig:DynamicDialogConfig)
   {
     console.log("get user", this.DynamicDialogConfig.data);
     this.getUser = this.DynamicDialogConfig.data[0];     
    }

  ngOnInit(): void {
  }

   //reject method
   onReject() {
    this.messageService.clear('c');
}

}
