import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./modules/client/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/client/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/client/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/client/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'achievements',
    loadChildren: () =>
      import('./modules/client/achievements/achievements.module').then(
        (m) => m.AchievementsModule
      ),
  },
  {
    path: 'licence',
    loadChildren: () =>
      import('./modules/client/licence/licence.module').then(
        (m) => m.LicenceModule
      ),
  },
  {
    path: 'abiturients/posts',
    loadChildren: () =>
      import('./modules/client/abiturients/abiturients.module').then(
        (m) => m.AbiturientsModule
      ),
  },
  {
    path: 'specialties',
    loadChildren: () =>
      import('./modules/client/specialties/specialties.module').then(
        (m) => m.SpecialtiesModule
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./modules/client/article/article.module').then(
        (m) => m.ArticleModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
