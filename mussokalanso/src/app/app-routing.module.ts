import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
  // {
  //   path: 'tabs/items/:id',
  //   loadChildren: () => import('./pages/tabs/item/item.module').then( m => m.ItemPageModule)
  // },
   {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  // {
  //   path: 'video/details',
  //   loadChildren: () => import('./pages/tabs/video-details/video-details.module').then( m => m.VideoDetailsPageModule)
  // },
  {
    path: 'signup',
    loadChildren: () => import('./pages/auth/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'all-module',
    loadChildren: () => import('./all-module/all-module.module').then( m => m.AllModulePageModule)
  },
  {
    path: 'all-categorie',
    loadChildren: () => import('./all-categorie/all-categorie.module').then( m => m.AllCategoriePageModule)
  }
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
