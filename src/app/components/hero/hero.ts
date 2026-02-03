// hero.component.ts
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hero',
  // hero.component.ts (solo la parte del template)
  template: `
    <section class="hero-section">
      
      <div class="overlay"></div>

      <div class="hero-content">
        <h1 class="titulo-principal henny-penny-regular">¡ME RECIBO!</h1>
        
        <div class="countdown cabin-sketch delicious-handrawn-regular">
          <span>{{days}}d : {{hours}}h : {{mins}}m : {{secs}}s</span>
        </div>
      </div>
    </section>
  `,
  // Asegurate de que esta línea esté presente para cargar los estilos
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  days: number = 0; hours: number = 0; mins: number = 0; secs: number = 0;

  ngOnInit() {
    const target = new Date('2026-06-30T10:00:00').getTime();
    interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const diff = target - now;
      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.secs = Math.floor((diff % (1000 * 60)) / 1000);
    });
  }
}