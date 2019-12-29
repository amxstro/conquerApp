import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadCuatroElPageRoutingModule } from './temas-unidad-cuatro-el-routing.module';
import { TemasUnidadCuatroElPage } from './temas-unidad-cuatro-el.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadCuatroElPage }])
  ],
  declarations: [TemasUnidadCuatroElPage]
})
export class TemasUnidadCuatroElPageModule {}
