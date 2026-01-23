import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PlayerComponent } from './components/player/player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, PlayerComponent], // Importante agregar estos tres
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'landing-graduacion';
}