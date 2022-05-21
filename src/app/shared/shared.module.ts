import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MaterialModule } from './modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsComponent } from './components/icons/icons.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageYOffsetDirective } from './directives/page-y-offset.directive';
import { SeparatorPipe } from './pipes/separator.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { ImgThumbsComponent } from './components/img-thumbs/img-thumbs.component';
import { ZoomImgModalComponent } from './components/img-thumbs/zoom-img-modal/zoom-img-modal.component';
import { MenuFacade } from '../core/facade/menu.facade';
import { RouteLinkPipe } from './pipes/route-link.pipe';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { TitleLinkPipe } from './pipes/title-link.pipe';
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
  SidebarComponent,
  TableComponent,
  TinymceEditorComponent,
  ClientPageWrapperComponent,
];
const pipes = [SeparatorPipe, RouteLinkPipe, TitleLinkPipe];
const directives = [PageYOffsetDirective];
const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxMaskModule,
  EditorModule,
  MaterialModule,
];
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
  declarations: [...components, ...directives, ...pipes],
  imports: [...modules],
  exports: [...components, ...directives, ...pipes, MaterialModule],
  providers: [...facades],
})
export class SharedModule {}
