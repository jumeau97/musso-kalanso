import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailChapitrePageRoutingModule } from './detail-chapitre-routing.module';

import { DetailChapitrePage } from './detail-chapitre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailChapitrePageRoutingModule
  ],
  declarations: [DetailChapitrePage]
})
export class DetailChapitrePageModule {}
