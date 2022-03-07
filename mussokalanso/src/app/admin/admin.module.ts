import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { DetailCategorieComponent } from '../pages/tabs/detail-categorie/detail-categorie.component';
import { FormationsComponent } from '../formations/formations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule
  ],
  declarations: [AdminPage, DetailCategorieComponent, FormationsComponent]
})
export class AdminPageModule {}
