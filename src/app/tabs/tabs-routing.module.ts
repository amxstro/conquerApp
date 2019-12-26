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
        path: 'temas-unidad-uno-el',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../unidades-electricidad/temas-unidad-uno-el/temas-unidad-uno-el.module').then(m => m.TemasUnidadUnoElPageModule)
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
