import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryEditComponent } from "./gallery-edit/gallery-edit.component";
import { GalleryComponent } from "./gallery.component";

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: ':id/edit', component: GalleryEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
