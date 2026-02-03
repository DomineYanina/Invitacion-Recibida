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
  ubicaciones = [
    {
      titulo: 'Pre-Gira: Mi Depto',
      hora: '08:00 AM',
      limite: '08:45 AM (Salimos puntual)',
      descripcion: 'Para los que quieran salir en caravana hacia la facu.',
      direccion: 'Avenida Arieta 2555, San Justo',
      // URL optimizada para que Google Maps busque la dirección exacta
      linkMaps: 'https://www.google.com/maps/search/?api=1&query=Avenida+Arieta+2555+San+Justo',
      tipo: 'previa'
    },
    {
      titulo: 'La Defensa: UNLaM',
      hora: '10:00 AM',
      limite: '09:45 AM (IMPORTANTE)',
      descripcion: 'La defensa comienza puntual. Si llegás tarde, no te dejarán entrar al aula.',
      notaEspecial: 'Aula a confirmar - Ver plano abajo',
      linkMaps: 'https://maps.google.com/?q=UNLaM+San+Justo',
      tipo: 'facu'
    },
    {
      titulo: 'El Festejo: El Bar',
      hora: '21:00 PM',
      reserva: 'A nombre de: Tu Nombre',
      descripcion: 'Brindis, comida y festejo final.',
      direccion: 'Dirección del bar',
      linkMaps: 'https://maps.google.com/?q=Bar+Elegido',
      tipo: 'bar'
    }
  ];
}