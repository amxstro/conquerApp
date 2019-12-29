import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { UnidadesInglesPageRoutingModule } from './unidades-ingles-routing.module';
import { UnidadesInglesPage } from './unidades-ingles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: UnidadesInglesPage }])

  ],
  declarations: [UnidadesInglesPage]
})
export class UnidadesInglesPageModule {}
