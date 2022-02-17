import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCategoriePageRoutingModule } from './all-categorie-routing.module';

import { AllCategoriePage } from './all-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCategoriePageRoutingModule
  ],
  declarations: [AllCategoriePage]
})
export class AllCategoriePageModule {}
