import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationsComponent } from '../formations/formations.component';
import { AdminGuard } from '../guards/admin/admin.guard';
import { DetailCategorieComponent } from '../pages/tabs/detail-categorie/detail-categorie.component';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        redirectTo:"home",
        pathMatch:"full"

      },
      {
        path: 'video/details',
        loadChildren: () => import('../pages/tabs/video-details/video-details.module').then( m => m.VideoDetailsPageModule)
      },
      {
        path: 'tabs',
        loadChildren: () => import('../pages/tabs/tabs.module').then( m => m.TabsPageModule)
      },
      {
        path: 'tabs/items/:id',
        loadChildren: () => import('../pages/tabs/item/item.module').then( m => m.ItemPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/tabs/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
      },
      {
        path: 'read-module/:id',
        loadChildren: () => import('./read-module/read-module.module').then( m => m.ReadModulePageModule)
      },
      {
        path:'details-category/:id',
        component:DetailCategorieComponent
      },
      {
        path: 'formations',
        component:FormationsComponent
      }
  ]
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
