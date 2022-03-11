import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailChapitrePage } from './detail-chapitre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailChapitrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailChapitrePageRoutingModule {}
