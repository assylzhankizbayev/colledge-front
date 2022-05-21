import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
import { ClientPageWrapperComponent } from './shared/components/client-page-wrapper/client-page-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'page/main', pathMatch: 'full' },
  {
    path: 'page',
    loadChildren: () =>
      import('./modules/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'blog-directora',
    component: ClientPageWrapperComponent,
    loadChildren: () =>
      import('./modules/blog-directora/blog-directora.module').then(
        (m) => m.BlogDirectoraModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
