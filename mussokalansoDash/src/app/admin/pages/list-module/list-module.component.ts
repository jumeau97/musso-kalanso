import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewModuleComponent } from '../new-module/new-module.component';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss'],
  providers: [DialogService]
})
export class ListModuleComponent implements OnInit {

  ref!:DynamicDialogRef
  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
  }



}
