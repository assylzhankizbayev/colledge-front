import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main/main.module').then(m => m. MainModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'for-abiturients',
    loadChildren: () => import('./modules/abiturients/abiturients.module').then(m => m.AbiturientsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
