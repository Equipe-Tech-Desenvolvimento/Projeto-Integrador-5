import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResiduosPage } from './residuos.page';

const routes: Routes = [
  {
    path: '',
    component: ResiduosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResiduosPageRoutingModule {}
