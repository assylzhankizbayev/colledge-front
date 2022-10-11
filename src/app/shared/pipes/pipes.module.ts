import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteLinkPipe } from './route-link.pipe';
import { SeparatorPipe } from './separator.pipe';
import { TitleLinkPipe } from './title-link.pipe';

@NgModule({
  declarations: [RouteLinkPipe, SeparatorPipe, TitleLinkPipe],
  imports: [CommonModule],
  exports: [RouteLinkPipe, SeparatorPipe, TitleLinkPipe],
})
export class PipesModule {}
