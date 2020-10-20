import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';


const routes: Routes = [

  
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},

  { path: 'inicio',  loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),canActivate: [AuthGuard]},
  { path: 'home',  loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),canActivate: [AuthGuard]},
  { path: 'login',  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),canActivate: [AuthGuard]},
  { path: 'perfil',loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate: [AuthGuard]},
  { path: 'residuos',loadChildren: () => import('./pages/residuos/residuos.module').then( m => m.ResiduosPageModule), canActivate: [AuthGuard]},
  { path: 'rotas',loadChildren: () => import('./pages/rotas/rotas.module').then( m => m.RotasPageModule), canActivate: [AuthGuard]},
  { path: 'rotas',loadChildren: () => import('./pages/rotas/rotas.module').then( m => m.RotasPageModule), canActivate: [AuthGuard]},
  { path: 'contato',loadChildren: () => import('./pages/contato/contato.module').then( m => m.ContatoPageModule), canActivate: [AuthGuard]},


 // { path: 'tabs',loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule), canActivate: [AuthGuard]},
 // { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' , canActivate: [AuthGuard] },
 // { path: 'details/:id', loadChildren: './pages/details/details.module#DetailsPageModule' , canActivate: [AuthGuard] },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }