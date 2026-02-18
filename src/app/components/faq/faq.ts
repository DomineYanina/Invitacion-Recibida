// src/app/components/faq/faq.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FaqComponent {
  preguntas = [
    {
      q: '¿Dónde puedo estacionar en la UNLaM?',
      a: 'La universidad cuenta con estacionamiento propio ingresando por la calle Florencio Varela. Te recomiendo llegar 15 o 20 minutos antes por si hay mucha gente.',
      abierta: false
    },
    {
      q: '¿Donde va a ser el festejo post-defensa?',
      a: 'Va a tener dos etapas: La primera será en la puerta de la universidad que se encuentra sobre la calle Florencio Varela. La segunda etapa será en el bar donde se haya hecho la reserva.',
      abierta: false
    },
    {
      q: '¿Se puede llevar acompañante al bar?',
      a: 'La reserva en el bar está hecha para un número específico de personas. Por favor, consultame por privado antes de confirmar a alguien extra.',
      abierta: false
    },
    {
      q: '¿Se puede llevar acompañante a la defensa?',
      a: 'Al ser un día sumamente importante para mi, prefiero pasarlo con las personas que más importantes son en mi vida. Por favor, consultame por privado antes de confirmar a alguien extra.',
      abierta: false
    },
    {
      q: '¿Qué pasa si llueve el día de la defensa?',
      a: 'La defensa de la tesis no se suspende. El festejo posterior se trasladará a un sector techado de la facultad para que no falte la harina ni el vino.',
      abierta: false
    },
    {
      q: '¿Qué pasa si llego a la universidad una vez que ya haya empezado la defensa?',
      a: 'A quienes no lleguen a tiempo no se les permitirá el acceso al aula, por lo que recomiendo llegar con la debida anticipación.',
      abierta: false
    },
    {
      q: '¿Qué líneas de colectivo pasan por la universidad?',
      a: 'Las opciones principales incluyen las líneas 46, 88, 96, 174, 180, 205, 242, 378, 382, 620, 621, 622 y 628.',
      abierta: false
    }
  ];

  togglePregunta(index: number) {
    this.preguntas[index].abierta = !this.preguntas[index].abierta;
  }
}