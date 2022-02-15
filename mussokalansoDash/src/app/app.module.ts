import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './menu/side-menu/side-menu.component';
import { TopBarComponent } from './menu/top-bar/top-bar.component';
import { FooterComponent } from './menu/footer/footer.component';
import { AccueilComponent } from './admin/pages/accueil/accueil.component';
import { NewCategorieComponent } from './admin/pages/new-categorie/new-categorie.component';
import { ListCategoryComponent } from './admin/pages/list-category/list-category.component';
import { NewModuleComponent } from './admin/pages/new-module/new-module.component';
import { ListModuleComponent } from './admin/pages/list-module/list-module.component';
import { NewChapterComponent } from './admin/pages/new-chapter/new-chapter.component';
import { ListChapterComponent } from './admin/pages/list-chapter/list-chapter.component';
import { ManageLearnerComponent } from './admin/pages/manage-learner/manage-learner.component';
import { ListLearnerComponent } from './admin/pages/list-learner/list-learner.component';
import { DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModuleByCategComponent } from './list-module-by-categ/list-module-by-categ.component';
import { NewUserComponent } from './admin/pages/new-user/new-user.component';
import { ListUserComponent } from './admin/pages/list-user/list-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { DetailModuleComponent } from './admin/pages/detail-module/detail-module.component';
// import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopBarComponent,
    FooterComponent,
    AccueilComponent,
    NewCategorieComponent,
    ListCategoryComponent,
    NewModuleComponent,
    ListModuleComponent,
    NewChapterComponent,
    ListChapterComponent,
    ManageLearnerComponent,
    ListLearnerComponent,
    ListModuleByCategComponent,
    NewUserComponent,
    ListUserComponent,
    DetailUserComponent,
    DetailModuleComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    ToastModule,
    // NgxPaginationModule,
    // DynamicDialogConfig

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
		NewCategorieComponent
	],
})
export class AppModule { }
