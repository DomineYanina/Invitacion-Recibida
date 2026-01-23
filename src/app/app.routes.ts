import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { LogisticaComponent } from './components/logistica/logistica';

export const routes: Routes = [
  { path: '', component: HeroComponent }, // Página de inicio (Contador)
  { path: 'detalles', component: LogisticaComponent }, // Sección de mapas y logística
  { path: '**', redirectTo: '' } // Redirección por si escriben cualquier otra cosa
];