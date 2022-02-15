import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/model/Categorie';
import { CategoryService } from 'src/app/services/category/category.service';
import { ModuleService } from 'src/app/services/module/module.service';
@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.scss']
})
export class UpdateModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
