import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery.component';
import { GalleryEditComponent } from './gallery-edit/gallery-edit.component';
import { GalleryFormComponent } from './gallery-form/gallery-form.component';
import { SharedModule } from '../../../shared/shared.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryService } from '../../../core/services/gallery.service';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryEditComponent,
    GalleryFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [GalleryService]
})
export class GalleryModule { }
