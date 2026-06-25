// src/app/components/logistica/logistica.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logistica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logistica.html',
  styleUrl: './logistica.css'
})
export class LogisticaComponent {
  ubicaciones: Array<{
    titulo: string;
    hora: string;
    descripcion: string;
    tipo: string;
    direccion?: string;
    linkMaps?: string;
    limite?: string;
    reserva?: string;
    notaEspecial?: string;
  }> = [
      {
        titulo: 'Pre-Gira: Mi Depto',
        hora: 'A confirmar',
        limite: 'A confirmar',
        descripcion: 'Para los que quieran salir en caravana hacia la facu.',
        direccion: 'Avenida Arieta 2555, San Justo',
        tipo: 'previa'
      },
      {
        titulo: 'La Defensa: UNLaM',
        hora: 'A confirmar',
        limite: 'A confirmar',
        descripcion: 'La defensa comienza puntual. Si llegás tarde, no te dejarán entrar al aula.',
        notaEspecial: 'Aula a confirmar - Ver plano abajo',
        linkMaps: 'https://maps.google.com/?q=UNLaM+San+Justo',
        tipo: 'facu'
      },
      {
        titulo: 'Brindis post-tiradera',
        hora: 'A confirmar',
        descripcion: 'Post tiradera y enchastre, caravana hacia mi departamento. Se intentará que haya pizza, se promete que haya bebidas.',
        tipo: 'brindis'
      },
      {
        titulo: 'El Festejo: Bar a confirmar',
        hora: 'A confirmar',
        reserva: 'A nombre de: Yanina',
        descripcion: 'Brindis, comida y festejo final.',
        direccion: 'Dirección del bar',
        linkMaps: 'https://maps.google.com/?q=Bar+Elegido',
        tipo: 'bar'
      }
    ];
}