import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.scss'],
  providers:[DialogService, MessageService],
})
export class UpdateCategorieComponent implements OnInit {

  ref!: DynamicDialogRef;

  constructor( private categService:CategoryService, private messageService:MessageService) { }

  ngOnInit(): void {
  }
   //reject method
   onReject() {
    this.messageService.clear('c');
}

}
