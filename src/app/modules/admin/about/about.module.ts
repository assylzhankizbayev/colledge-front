import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { AboutFacade } from '../../../core/facade/about.facade';
import { AboutAdminComponent } from './about.component';


@NgModule({
  declarations: [
    AboutAdminComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AboutFacade]
})
export class AboutModule { }
