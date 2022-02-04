import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadModulePage } from './read-module.page';

const routes: Routes = [
  {
    path: '',
    component: ReadModulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadModulePageRoutingModule {}
