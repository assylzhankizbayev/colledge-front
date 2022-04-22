import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'news',
        loadChildren: () =>
          import('../news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'achievements',
        loadChildren: () =>
          import('../achievements/achievements.module').then(
            (m) => m.AchievementsModule
          ),
      },
      {
        path: 'licence',
        loadChildren: () =>
          import('../licence/licence.module').then((m) => m.LicenceModule),
      },
      {
        path: 'article',
        loadChildren: () =>
          import('../article/article.module').then((m) => m.ArticleModule),
      },
      {
        path: 'menu',
        loadChildren: () =>
          import('../menu/menu.module').then((m) => m.MenuModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('../category/category.module').then((m) => m.CategoryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
