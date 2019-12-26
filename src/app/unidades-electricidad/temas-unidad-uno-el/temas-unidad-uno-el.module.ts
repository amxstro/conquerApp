import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemasUnidadUnoElPage } from './temas-unidad-uno-el.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TemasUnidadUnoElPage }])
  ],
  declarations: [TemasUnidadUnoElPage]
})
export class TemasUnidadUnoElPageModule{}
