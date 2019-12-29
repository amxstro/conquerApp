import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadDosMaPageRoutingModule } from './temas-unidad-dos-ma-routing.module';
import { TemasUnidadDosMaPage } from './temas-unidad-dos-ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadDosMaPage }])
  ],
  declarations: [TemasUnidadDosMaPage]
})
export class TemasUnidadDosMaPageModule {}
