import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './player.html',
  styleUrl: './player.css'
})
export class PlayerComponent implements OnInit {
  // 1. Configuración de datos de la landing
  public config = {
    musica: {
      // HEMOS AGREGADO '/embed/' después de spotify.com para evitar la redirección
      playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PL5bfumkVTEEvGqxvsdht3yCYwUvHTMJIH',
      botonInicio: '¡Que empiece la fiesta!',
      modo: 'compacto'
    }
  };

  public safeUrl!: SafeResourceUrl;
  public musicaActivada: boolean = false;
  public estaMinimizado: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // 2. Aplicamos el bypass de seguridad para que Angular confíe en el iframe de Spotify
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.musica.playlistUrl);
  }

  // 3. Método para activar la interfaz del reproductor tras la interacción del usuario
  activarMusica() {
    this.musicaActivada = true;
  }

  toggleMinimizar() {
    this.estaMinimizado = !this.estaMinimizado;
  }
}