import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { StudentLifeGalleryComponent } from './student-life-gallery/student-life-gallery.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { ProgramsComponent } from './programs/programs.component';
import { ContactsMainComponent } from './contacts-main/contacts-main.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeedbackMainComponent } from './feedback-main/feedback-main.component';


const routes: Routes = [
  { path: '', component: MainComponent }
];


@NgModule({
  declarations: [
    MainComponent,
    AboutCollegeComponent,
    StudentLifeGalleryComponent,
    NewsMainComponent,
    ProgramsComponent,
    ContactsMainComponent,
    BenefitsComponent,
    FeedbackMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SwiperModule,
    MaterialModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule { }
