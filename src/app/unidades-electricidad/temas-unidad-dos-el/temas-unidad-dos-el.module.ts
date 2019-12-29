import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { TemasUnidadDosElPageRoutingModule } from './temas-unidad-dos-el-routing.module';
import { TemasUnidadDosElPage } from './temas-unidad-dos-el.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component:TemasUnidadDosElPage}])
  ],
  declarations: [TemasUnidadDosElPage]
})
export class TemasUnidadDosElPageModule {}
