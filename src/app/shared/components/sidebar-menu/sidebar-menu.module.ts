import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [CommonModule, RouterModule, PipesModule],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
