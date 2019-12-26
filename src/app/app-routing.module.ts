import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'unidades-robotica',
    loadChildren: () => import('./unidades-robotica/unidades-robotica.module').then( m => m.UnidadesRoboticaPageModule)
  },
  {
    path: 'unidades-electricidad',
    loadChildren: () => import('./unidades-electricidad/unidades-electricidad.module').then( m => m.UnidadesElectricidadPageModule)
  },
  {
    path: 'temas-unidad-uno-el',
    loadChildren: () => import('./unidades-electricidad/temas-unidad-uno-el/temas-unidad-uno-el.module').then( m => m.TemasUnidadUnoElPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
