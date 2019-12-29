import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { UnidadesMatematicaPageRoutingModule } from './unidades-matematica-routing.module';
import { UnidadesMatematicaPage } from './unidades-matematica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UnidadesMatematicaPage }])
  ],
  declarations: [UnidadesMatematicaPage]
})
export class UnidadesMatematicaPageModule {}
