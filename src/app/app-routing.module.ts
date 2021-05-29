import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'research',
    loadChildren: () => import('./modules/research/research.module').then(m => m.ResearchModule),
    data: {
      breadcrumb: 'research'
    }
  },
  {
    path: 'research/:id',
    loadChildren: () => import('./modules/research/research.module').then(m => m.ResearchModule),
    data: {
      breadcrumb: 'research'
    }
  },
  {
    path: 'labs',
    loadChildren: () => import('./modules/labs/labs.module').then(m => m.LabsModule)
  },
  {
    path: 'labs/:id',
    loadChildren: () => import('./modules/labs/labs.module').then(m => m.LabsModule)
  },
  {
    path: 'experts',
    loadChildren: () => import('./modules/experts/experts.module').then(m => m.ExpertsModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./modules/equipment/equipment.module').then(m => m.EquipmentModule)
  },
  {
    path: 'equipment/:id',
    loadChildren: () => import('./modules/equipment/equipment.module').then(m => m.EquipmentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
