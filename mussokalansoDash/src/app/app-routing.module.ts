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
import { UpdateCategorieComponent } from './admin/update-categorie/update-categorie.component';
import { UpdateChapitreComponent } from './admin/update-chapitre/update-chapitre.component';
import { UpdateModuleComponent } from './admin/update-module/update-module.component';
import { UpdateUtilisateurComponent } from './admin/update-utilisateur/update-utilisateur.component';
import { ListModuleByCategComponent } from './list-module-by-categ/list-module-by-categ.component';
import { LoginComponent } from './login/login.component';

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
    path:"list/module/by/categ",
    component:ListModuleByCategComponent
  },
  {
    path:"detail/module/:id",
    component:DetailModuleComponent
  },
  {
    path:"update/module/:id",
    component:UpdateModuleComponent
  },
  {
    path:"update/chapitre",
    component:UpdateChapitreComponent
  },
  {
    path:"update/categorie",
    component:UpdateCategorieComponent
  },
  {
    path:"update/utilisateur",
    component:UpdateUtilisateurComponent
  },
  {
    path:"login",
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
