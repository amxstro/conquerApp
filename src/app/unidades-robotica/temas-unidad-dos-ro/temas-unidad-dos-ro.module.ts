import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadDosRoPageRoutingModule } from './temas-unidad-dos-ro-routing.module';
import { TemasUnidadDosRoPage } from './temas-unidad-dos-ro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadDosRoPage }])
  ],
  declarations: [TemasUnidadDosRoPage]
})
export class TemasUnidadDosRoPageModule {}
