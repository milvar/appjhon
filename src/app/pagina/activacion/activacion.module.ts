import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivacionPageRoutingModule } from './activacion-routing.module';

import { ActivacionPage } from './activacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActivacionPage]
})
export class ActivacionPageModule {}
