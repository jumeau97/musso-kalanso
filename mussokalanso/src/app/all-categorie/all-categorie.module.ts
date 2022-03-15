import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCategoriePageRoutingModule } from './all-categorie-routing.module';

import { AllCategoriePage } from './all-categorie.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCategoriePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AllCategoriePage]
})
export class AllCategoriePageModule {}
