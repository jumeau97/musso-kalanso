import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './admin/pages/accueil/accueil.component';
import { DetailModuleComponent } from './admin/pages/detail-module/detail-module.component';
import { ListCategoryComponent } from './admin/pages/list-category/list-category.component';
import { ListChapterComponent } from './admin/pages/list-chapter/list-chapter.component';
import { ListLearnerComponent } from './admin/pages/list-learner/list-learner.component';
import { ListModuleComponent } from './admin/pages/list-module/list-module.component';
import { ListUserComponent } from './admin/pages/list-user/list-user.component';
import { ManageLearnerComponent } from './admin/pages/manage-learner/manage-learner.component';
import { NewCategorieComponent } from './admin/pages/new-categorie/new-categorie.component';
import { NewChapterComponent } from './admin/pages/new-chapter/new-chapter.component';
import { NewModuleComponent } from './admin/pages/new-module/new-module.component';
import { NewUserComponent } from './admin/pages/new-user/new-user.component';

const routes: Routes = [
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"new/category",
    component:NewCategorieComponent
  },
  {
    path:"list/category",
    component:ListCategoryComponent
  },
  {
    path:"list/module",
    component:ListModuleComponent
  },
  {
    path:"new/module",
    component:NewModuleComponent
  },
  {
    path:"list/chapter",
    component:ListChapterComponent
  },
  {
    path:"new/chapter",
    component:NewChapterComponent
  },
  {
    path:"list/learner",
    component:ListLearnerComponent
  },
  {
    path:"manage/learner",
    component:ManageLearnerComponent
  },
  {
    path:"new/user",
    component:NewUserComponent
  },
  {
    path:"list/user",
    component:ListUserComponent
  },
  {
    path:"detail/module",
    component:DetailModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
