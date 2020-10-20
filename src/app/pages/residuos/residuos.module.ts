import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResiduosPageRoutingModule } from './residuos-routing.module';

import { ResiduosPage } from './residuos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResiduosPageRoutingModule
  ],
  declarations: [ResiduosPage]
})
export class ResiduosPageModule {}
