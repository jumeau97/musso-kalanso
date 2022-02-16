import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-detail-learner',
  templateUrl: './detail-learner.component.html',
  styleUrls: ['./detail-learner.component.scss'],
  providers:[MessageService],
})
export class DetailLearnerComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }

   //reject method
   onReject() {
    this.messageService.clear('c');
}

}
