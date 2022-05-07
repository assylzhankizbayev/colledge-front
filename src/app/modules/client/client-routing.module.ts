import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'main',
        loadChildren: () =>
          import('./main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./contacts/contacts.module').then((m) => m.ContactsModule),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('./news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'achievements',
        loadChildren: () =>
          import('./achievements/achievements.module').then(
            (m) => m.AchievementsModule
          ),
      },
      {
        path: 'licence',
        loadChildren: () =>
          import('./licence/licence.module').then((m) => m.LicenceModule),
      },
      {
        path: 'abiturients/posts',
        loadChildren: () =>
          import('./abiturients/abiturients.module').then(
            (m) => m.AbiturientsModule
          ),
      },
      {
        path: 'specialties',
        loadChildren: () =>
          import('./specialties/specialties.module').then(
            (m) => m.SpecialtiesModule
          ),
      },
      {
        path: 'article',
        loadChildren: () =>
          import('./article/article.module').then((m) => m.ArticleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
