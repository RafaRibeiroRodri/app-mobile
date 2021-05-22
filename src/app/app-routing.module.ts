import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoggedGuard} from './guard/logged.guard';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'dados',
        loadChildren: () => import('./dadospessoais/dados.module').then(m => m.DadosPessoaisModule)
      },
      {
        path: 'suporte',
        loadChildren: () => import('./suporte/suporte.module').then(m => m.SuporteModule)
      },
      {
        path: 'mural',
        loadChildren: () => import('./mural/mural.module').then(m => m.MuralModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('./reservas/reserva.module').then(m => m.ReservaModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
