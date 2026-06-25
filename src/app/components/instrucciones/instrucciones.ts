// src/app/components/instrucciones/instrucciones.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instrucciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instrucciones.html',
  styleUrl: './instrucciones.css'
})
export class InstruccionesComponent {
  permitidos = [
    { nombre: 'Vino Tinto / Sidra / Cerveza', icono: '🍷' },
    { nombre: 'Polvos Holi / Glitter', icono: '🌈' },
    { nombre: 'Harina / Huevos / Polenta / Yerba', icono: '🥚' },
    { nombre: 'Pintura (SOLO al agua)', icono: '🎨' },
    { nombre: 'Serpentina / Papel Picado', icono: '🎊' }
  ];

  prohibidos = [
    { nombre: 'Tijeras (Pelo/Ropa)', icono: '✂️' },
    { nombre: 'Marcadores Permanentes', icono: '🖍️' },
    { nombre: 'Pintura al Aceite / Sintética / Espuma', icono: '🚫' }
  ];
}