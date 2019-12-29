import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadCincoElPageRoutingModule } from './temas-unidad-cinco-el-routing.module';
import { TemasUnidadCincoElPage } from './temas-unidad-cinco-el.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadCincoElPage }])
  ],
  declarations: [TemasUnidadCincoElPage]
})
export class TemasUnidadCincoElPageModule {}
