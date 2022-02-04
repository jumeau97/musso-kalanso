import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadModulePageRoutingModule } from './read-module-routing.module';

import { ReadModulePage } from './read-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadModulePageRoutingModule
  ],
  declarations: [ReadModulePage]
})
export class ReadModulePageModule {}
