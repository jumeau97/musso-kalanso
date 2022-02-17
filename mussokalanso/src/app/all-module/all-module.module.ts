import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllModulePageRoutingModule } from './all-module-routing.module';

import { AllModulePage } from './all-module.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllModulePageRoutingModule
  ],
  declarations: [AllModulePage]
})
export class AllModulePageModule {}
