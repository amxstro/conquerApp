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
  },
  {
    path: 'temas-unidad-dos-el',
    loadChildren: () => import('./unidades-electricidad/temas-unidad-dos-el/temas-unidad-dos-el.module').then( m => m.TemasUnidadDosElPageModule)
  },
  {
    path: 'temas-unidad-tres-el',
    loadChildren: () => import('./unidades-electricidad/temas-unidad-tres-el/temas-unidad-tres-el.module').then( m => m.TemasUnidadTresElPageModule)
  },
  {
    path: 'temas-unidad-cuatro-el',
    loadChildren: () => import('./unidades-electricidad/temas-unidad-cuatro-el/temas-unidad-cuatro-el.module').then( m => m.TemasUnidadCuatroElPageModule)
  },
  {
    path: 'temas-unidad-cinco-el',
    loadChildren: () => import('./unidades-electricidad/temas-unidad-cinco-el/temas-unidad-cinco-el.module').then( m => m.TemasUnidadCincoElPageModule)
  },
  {
    path: 'temas-unidad-uno-ro',
    loadChildren: () => import('./unidades-robotica/temas-unidad-uno-ro/temas-unidad-uno-ro.module').then( m => m.TemasUnidadUnoRoPageModule)
  },
  {
    path: 'temas-unidad-dos-ro',
    loadChildren: () => import('./unidades-robotica/temas-unidad-dos-ro/temas-unidad-dos-ro.module').then( m => m.TemasUnidadDosRoPageModule)
  },
  {
    path: 'unidades-matematica',
    loadChildren: () => import('./unidades-matematica/unidades-matematica.module').then( m => m.UnidadesMatematicaPageModule)
  },
  {
    path: 'unidades-ingles',
    loadChildren: () => import('./unidades-ingles/unidades-ingles.module').then( m => m.UnidadesInglesPageModule)
  },
  {
    path: 'temas-unidad-uno-ma',
    loadChildren: () => import('./unidades-matematica/temas-unidad-uno-ma/temas-unidad-uno-ma.module').then( m => m.TemasUnidadUnoMaPageModule)
  },
  {
    path: 'temas-unidad-dos-ma',
    loadChildren: () => import('./unidades-matematica/temas-unidad-dos-ma/temas-unidad-dos-ma.module').then( m => m.TemasUnidadDosMaPageModule)
  },
  {
    path: 'temas-unidad-tres-ma',
    loadChildren: () => import('./unidades-matematica/temas-unidad-tres-ma/temas-unidad-tres-ma.module').then( m => m.TemasUnidadTresMaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
