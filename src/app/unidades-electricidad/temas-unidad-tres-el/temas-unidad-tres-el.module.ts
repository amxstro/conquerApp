import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadTresElPageRoutingModule } from './temas-unidad-tres-el-routing.module';
import { TemasUnidadTresElPage } from './temas-unidad-tres-el.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadTresElPage }])
  ],
  declarations: [TemasUnidadTresElPage]
})
export class TemasUnidadTresElPageModule {}
