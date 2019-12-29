import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadUnoRoPageRoutingModule } from './temas-unidad-uno-ro-routing.module';
import { TemasUnidadUnoRoPage } from './temas-unidad-uno-ro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadUnoRoPage }])
  ],
  declarations: [TemasUnidadUnoRoPage]
})
export class TemasUnidadUnoRoPageModule {}
