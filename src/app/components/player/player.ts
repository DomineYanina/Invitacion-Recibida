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
      playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PL5bfumkVTEEvGqxvsdht3yCYwUvHTMJIH&enablejsapi=1',
      botonInicio: '¡Que empiece la fiesta!',
      modo: 'compacto'
    }
  };

  public safeUrl!: SafeResourceUrl;
  public musicaActivada: boolean = false;
  public estaMinimizado: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // 2. Aplicamos el bypass de seguridad para que Angular confíe en el iframe
    // Agregamos también el origin actual de forma dinámica para cumplir políticas CORS del reproductor de YouTube
    const currentOrigin = window.location.origin;
    const finalUrl = `${this.config.musica.playlistUrl}&origin=${encodeURIComponent(currentOrigin)}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(finalUrl);
  }

  // 3. Método para activar la interfaz del reproductor tras la interacción del usuario
  activarMusica() {
    this.musicaActivada = true;
  }

  toggleMinimizar() {
    this.estaMinimizado = !this.estaMinimizado;
  }

  playAnterior() {
    const iframe = document.getElementById('yt-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'previousVideo',
          args: []
        }),
        '*'
      );
    }
  }

  playSiguiente() {
    const iframe = document.getElementById('yt-player') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'nextVideo',
          args: []
        }),
        '*'
      );
    }
  }
}