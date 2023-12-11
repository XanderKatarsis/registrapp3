import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'docente',
    redirectTo: 'docente',
    pathMatch: 'full'
  },
  {
    path: 'asistencia',
    redirectTo: 'asistencia',
    pathMatch: 'full'
  },
  {
    path: 'estudiante',
    redirectTo: 'estudiante',
    pathMatch: 'full'
  },
  {
    path: 'lector',
    redirectTo: 'lector',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/home/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/home/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/docente/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'lector',
    loadChildren: () => import('./pages/estudiante/lector/lector.module').then( m => m.LectorPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./services/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'e404',
    loadChildren: () => import('./services/e404/e404.module').then( m => m.E404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
