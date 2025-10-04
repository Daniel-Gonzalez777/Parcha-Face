import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventoDetailComponent } from './components/evento-detail/evento-detail.component';
import { CrearEventoComponent } from './components/crear-evento/crear-evento.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ParchaFace - Tu Red Social de Eventos'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Iniciar Sesión - ParchaFace'
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Registrarse - ParchaFace'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard - ParchaFace'
  },
  {
    path: 'eventos',
    component: EventosComponent,
    title: 'Eventos - ParchaFace'
  },
  {
    path: 'evento/:id',
    component: EventoDetailComponent,
    title: 'Detalle del Evento - ParchaFace'
  },
  {
    path: 'crear-evento',
    component: CrearEventoComponent,
    title: 'Crear Evento - ParchaFace'
  },
  {
    path: 'comunidad',
    component: ComunidadComponent,
    title: 'Comunidad - ParchaFace'
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    title: 'Perfil - ParchaFace'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
