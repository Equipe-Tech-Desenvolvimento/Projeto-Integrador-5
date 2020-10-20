import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '/pages/home/home.module#HomePageModule'
          }
        ]
      },

      {
      path: 'residuos',
      children: [
        {
          path: '',
          loadChildren: '/pages/residuos/residuos.module#ResiduosPageModule'
        }
      ]
    },

    {
      path: 'perfil',
      children: [
        {
          path: '',
          loadChildren: '/pages/perfil/perfil.module#PerfilPageModule'
        }
      ]
    },


      {
        path: '',
        redirectTo: '/app/pages/tabs/home',
        pathMatch: 'full'
      }
    ]
  }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
