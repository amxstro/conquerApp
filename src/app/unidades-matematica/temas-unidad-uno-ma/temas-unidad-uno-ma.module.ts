import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadUnoMaPageRoutingModule } from './temas-unidad-uno-ma-routing.module';
import { TemasUnidadUnoMaPage } from './temas-unidad-uno-ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadUnoMaPage }])  ],
  declarations: [TemasUnidadUnoMaPage]
})
export class TemasUnidadUnoMaPageModule {}
