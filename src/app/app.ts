import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PlayerComponent } from './components/player/player';
import { HeroComponent } from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PlayerComponent, HeroComponent], // Importante agregar estos tres
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'landing-graduacion';
}