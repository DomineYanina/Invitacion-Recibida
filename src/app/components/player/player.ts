import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.html',
  styleUrls: ['./player.css']
})
export class PlayerComponent implements OnInit {
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Reemplaza con tu ID de playlist real de Spotify
    const playlistId = 'TU_ID_AQUÍ'; 
    const url = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}