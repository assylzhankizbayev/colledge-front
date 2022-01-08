import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from '../modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IconsComponent } from './components/icons/icons.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageYOffsetDirective } from './directives/page-y-offset.directive';
import { SeparatorPipe } from './pipes/separator.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewsSidebarComponent } from './components/news-sidebar/news-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { ImgThumbsComponent } from './components/img-thumbs/img-thumbs.component';
import { ZoomImgModalComponent } from './components/img-thumbs/zoom-img-modal/zoom-img-modal.component';
import { MenuFacade } from '../core/facade/menu.facade';

const components = [
  HeaderComponent,
  FooterComponent,
  IconsComponent,
  PageNotFoundComponent,
  NewsCardComponent,
  SidebarComponent,
  NewsSidebarComponent,
  ImgThumbsComponent,
  ZoomImgModalComponent,
];
const pipes = [SeparatorPipe];
const directives = [PageYOffsetDirective];
const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxMaskModule,
  MaterialModule,
  MatButtonModule,
];
const facades = [MenuFacade];

@NgModule({
  declarations: [...components, ...directives, ...pipes],
  imports: [...modules],
  exports: [...components, ...directives, ...pipes],
  providers: [...facades],
})
export class SharedModule {}
