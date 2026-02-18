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
        <h1 class="titulo-principal henny-penny-regular neon-green-text">
          ¡ME RECIBO!
        </h1>
        
        <div class="countdown delicious-handrawn-regular neon-green-subtext">
          <span>{{days}}d : {{hours}}h : {{mins}}m : {{secs}}s</span>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  days: number = 0; hours: number = 0; mins: number = 0; secs: number = 0;

  ngOnInit() {
    const target = new Date('2026-07-18T10:00:00').getTime();
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