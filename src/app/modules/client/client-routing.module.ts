import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleContainerComponent } from 'src/app/shared/components/article-container/article-container.component';
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
        component: ArticleContainerComponent,
        loadChildren: () =>
          import('./about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'achievements',
        component: ArticleContainerComponent,
        loadChildren: () =>
          import('./achievements/achievements.module').then(
            (m) => m.AchievementsModule
          ),
      },
      {
        path: 'licence',
        component: ArticleContainerComponent,
        loadChildren: () =>
          import('./licence/licence.module').then((m) => m.LicenceModule),
      },
      {
        path: 'abiturients/posts',
        component: ArticleContainerComponent,
        loadChildren: () =>
          import('./abiturients/abiturients.module').then(
            (m) => m.AbiturientsModule
          ),
      },
      {
        path: 'article',
        component: ArticleContainerComponent,
        loadChildren: () =>
          import('./article/article.module').then((m) => m.ArticleModule),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./gallery/gallery.module').then((m) => m.GalleryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
