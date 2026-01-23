import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  template: `
    <div class="player-container">
      <iframe [src]="safeUrl" width="100%" height="80" 
              frameBorder="0" allow="encrypted-media"></iframe>
    </div>
  `
})
export class PlayerComponent {
  safeUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    // Reemplaza con tu ID de playlist real
    const url = "https://open.spotify.com/embed/playlist/TU_ID_AQUI";
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}