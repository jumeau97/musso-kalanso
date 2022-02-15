import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss'],
  providers:[DialogService, MessageService],
})
export class DetailUserComponent implements OnInit {

  ref!: DynamicDialogRef;

  constructor( private messageService:MessageService) { }

  ngOnInit(): void {
  }

   //reject method
   onReject() {
    this.messageService.clear('c');
}

}
