import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnidadesElectricidadPage } from './unidades-electricidad.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UnidadesElectricidadPage }])
  ],
  declarations: [UnidadesElectricidadPage]
})
export class UnidadesElectricidadPageModule {}
