import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsComponent } from './components/icons/icons.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageYOffsetDirective } from './directives/page-y-offset.directive';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { ImgThumbsComponent } from './components/img-thumbs/img-thumbs.component';
import { ZoomImgModalComponent } from './components/img-thumbs/zoom-img-modal/zoom-img-modal.component';
import { MenuFacade } from '../core/facade/menu.facade';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AboutFacade } from '../core/facade/about.facade';
import { AchievementsFacade } from '../core/facade/achievements.facade';
import { ArticleFacade } from '../core/facade/article.facade';
import { CategoryFacade } from '../core/facade/category.facade';
import { LicenceFacade } from '../core/facade/licence.facade';
import { NewsFacade } from '../core/facade/news.facade';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { TinymceEditorComponent } from './components/tinymce-editor/tinymce-editor.component';
import { ClientPageWrapperComponent } from './components/client-page-wrapper/client-page-wrapper.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FileThumbComponent } from './components/files-list/file-thumb/file-thumb.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PipesModule } from './pipes/pipes.module';

const components = [
  AdminHeaderComponent,
  AdminSidebarComponent,
  FileUploadComponent,
  FooterComponent,
  HeaderComponent,
  IconsComponent,
  ImgThumbsComponent,
  ZoomImgModalComponent,
  NewsCardComponent,
  NewsSidebarComponent,
  PageNotFoundComponent,
  SelectComponent,
  TableComponent,
  TinymceEditorComponent,
  ClientPageWrapperComponent,
  FilesListComponent,
  FileThumbComponent,
  BreadcrumbsComponent
];
const directives = [PageYOffsetDirective];
const facades = [
  AboutFacade,
  AchievementsFacade,
  ArticleFacade,
  CategoryFacade,
  LicenceFacade,
  MenuFacade,
  NewsFacade,
];

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    EditorModule,
    MaterialModule,
    PipesModule
  ],
  exports: [...components, ...directives, MaterialModule],
  providers: [
    ...facades,
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class SharedModule {}
