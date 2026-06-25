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
  private player: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // 2. Aplicamos el bypass de seguridad para que Angular confíe en el iframe
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.musica.playlistUrl);

    // Cargar la API de YouTube si no está ya cargada
    if (!(window as any)['YT']) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Configurar callback cuando la API esté lista
    (window as any).onYouTubeIframeAPIReady = () => {
      if (this.musicaActivada) {
        this.initPlayer();
      }
    };
  }

  // 3. Método para activar la interfaz del reproductor tras la interacción del usuario
  activarMusica() {
    this.musicaActivada = true;
    setTimeout(() => {
      this.initPlayer();
    }, 300);
  }

  initPlayer() {
    if ((window as any).YT && (window as any).YT.Player) {
      this.player = new (window as any).YT.Player('yt-player', {
        events: {
          'onReady': () => {
            console.log('YouTube Player is ready');
          }
        }
      });
    }
  }

  toggleMinimizar() {
    this.estaMinimizado = !this.estaMinimizado;
  }

  playAnterior() {
    if (this.player && typeof this.player.previousVideo === 'function') {
      this.player.previousVideo();
    }
  }

  playSiguiente() {
    if (this.player && typeof this.player.nextVideo === 'function') {
      this.player.nextVideo();
    }
  }
}