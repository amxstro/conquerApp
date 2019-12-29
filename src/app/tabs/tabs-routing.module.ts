import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      {
        path: 'modulos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../modulos/modulos.module').then(m => m.ModulosPageModule)
          }
        ]
      },
      {
        path: 'configuracion',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'unidades-robotica',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-robotica/unidades-robotica.module').then(m => m.UnidadesRoboticaPageModule)
          }
        ]
      },
      {
        path: 'unidades-electricidad',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/unidades-electricidad.module').then(m => m.UnidadesElectricidadPageModule)
          }
        ]
      },
      {
        path: 'unidades-matematica',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-matematica/unidades-matematica.module').then(m => m.UnidadesMatematicaPageModule)
          }
        ]
      },
      {
        path: 'unidades-ingles',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-ingles/unidades-ingles.module').then(m => m.UnidadesInglesPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-uno-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-uno-el/temas-unidad-uno-el.module').then(m => m.TemasUnidadUnoElPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-dos-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-dos-el/temas-unidad-dos-el.module').then(m => m.TemasUnidadDosElPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-tres-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-tres-el/temas-unidad-tres-el.module').then(m => m.TemasUnidadTresElPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-cuatro-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-cuatro-el/temas-unidad-cuatro-el.module').then(m => m.TemasUnidadCuatroElPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-cinco-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-cinco-el/temas-unidad-cinco-el.module').then(m => m.TemasUnidadCincoElPageModule)
          }
        ]
      }, 
      {
        path: 'temas-unidad-uno-ro',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-robotica/temas-unidad-uno-ro/temas-unidad-uno-ro.module').then(m => m.TemasUnidadUnoRoPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-dos-ro',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-robotica/temas-unidad-dos-ro/temas-unidad-dos-ro.module').then(m => m.TemasUnidadDosRoPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-uno-ma',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-matematica/temas-unidad-uno-ma/temas-unidad-uno-ma.module').then(m => m.TemasUnidadUnoMaPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-dos-ma',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-matematica/temas-unidad-dos-ma/temas-unidad-dos-ma.module').then(m => m.TemasUnidadDosMaPageModule)
          }
        ]
      },
      {
        path: 'temas-unidad-tres-ma',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-matematica/temas-unidad-tres-ma/temas-unidad-tres-ma.module').then(m => m.TemasUnidadTresMaPageModule)
          }
        ]
      }
      ,
      {
        path: '',
        redirectTo: '/pages/modulos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/modulos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
