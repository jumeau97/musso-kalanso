import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { DetailCategorieComponent } from '../pages/tabs/detail-categorie/detail-categorie.component';
import { FormationsComponent } from '../formations/formations.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AdminPage, DetailCategorieComponent, FormationsComponent]
})
export class AdminPageModule {}
