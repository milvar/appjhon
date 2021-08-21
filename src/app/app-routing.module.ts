import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'manual',
    loadChildren: () => import('./pagina/manual/manual.module').then( m => m.ManualPageModule)
  },
  {
    path: 'consultas',
    loadChildren: () => import('./pagina/consultas/consultas.module').then( m => m.ConsultasPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./pagina/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'activacion',
    loadChildren: () => import('./pagina/activacion/activacion.module').then( m => m.ActivacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
