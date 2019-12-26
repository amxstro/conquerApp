import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnidadesRoboticaPage } from './unidades-robotica.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: UnidadesRoboticaPage }])
  ],
  declarations: [UnidadesRoboticaPage]
})
export class UnidadesRoboticaPageModule {}
