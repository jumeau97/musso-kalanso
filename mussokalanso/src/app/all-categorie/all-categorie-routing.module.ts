import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCategoriePage } from './all-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AllCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCategoriePageRoutingModule {}
