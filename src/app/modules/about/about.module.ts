import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutService } from '../../core/services/about.service';
import { SharedModule } from '../../shared/shared.module';
import { AboutFacade } from '../../core/facade/about.facade';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  providers: [
    AboutService,
    AboutFacade
  ]
})
export class AboutModule { }
