import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { HeroComponent } from './components/hero/hero';
import { LogisticaComponent } from './components/logistica/logistica';
import { InstruccionesComponent } from './components/instrucciones/instrucciones';
import { FaqComponent } from './components/faq/faq';
import { SidebarComponent } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Footer, SidebarComponent, RouterOutlet, LogisticaComponent, RouterLink, PlayerComponent, HeroComponent, InstruccionesComponent, FaqComponent], // Importante agregar estos tres
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'landing-graduacion';
}