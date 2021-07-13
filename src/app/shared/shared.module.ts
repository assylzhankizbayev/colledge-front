import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxMaskModule } from "ngx-mask";
import { MaterialModule } from "../modules/material/material.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { IconsComponent } from "./components/icons/icons.component";
import { NewsCardComponent } from "./components/news-card/news-card.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { PageYOffsetDirective } from "./directives/page-y-offset.directive";
import { SeparatorPipe } from "./pipes/separator.pipe";

const components = [
  HeaderComponent,
  FooterComponent,
  IconsComponent,
  PageNotFoundComponent,
  NewsCardComponent
];
const pipes = [
  SeparatorPipe
];
const directives = [
  PageYOffsetDirective
];
const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  NgxMaskModule,
  MaterialModule
];

@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [...modules],
  exports: [
    ...components,
    ...directives,
    ...pipes
  ]
})
export class SharedModule {}
