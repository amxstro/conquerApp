import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadTresMaPageRoutingModule } from './temas-unidad-tres-ma-routing.module';
import { TemasUnidadTresMaPage } from './temas-unidad-tres-ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadTresMaPage }])
  ],
  declarations: [TemasUnidadTresMaPage]
})
export class TemasUnidadTresMaPageModule {}
