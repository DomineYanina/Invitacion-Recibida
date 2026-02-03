import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-logistica',
  standalone: true,
  templateUrl: './logistica.html',
  styleUrls: ['./logistica.css']
})
export class LogisticaComponent implements AfterViewInit {
  private map: any;
  private routingControl: any;
  // Coordenadas de la UNLaM
  private unlamCoords: L.LatLngExpression = [-34.6705, -58.5627];

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    // Inicializar el mapa centrado en la UNLaM
    this.map = L.map('map').setView(this.unlamCoords, 15);

    // Cargar los azulejos (tiles) de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Marcador de la universidad
    L.marker(this.unlamCoords).addTo(this.map)
      .bindPopup('<b>UNLaM</b><br>Lugar de la tesis.')
      .openPopup();
  }

  // Función para calcular la ruta
  public calcularRuta(origen: string): void {
    // Nota: Leaflet Routing Machine usa OSRM por defecto para el cálculo
    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }

    // Aquí podrías usar un servicio de Geocoding para convertir el texto a coordenadas
    // Por ahora, simulamos un punto de origen (ej: Ramos Mejía)
    this.routingControl = (L as any).Routing.control({
      waypoints: [
        L.latLng(-34.649, -58.564), // Origen dinámico (Ramos Mejía ejemplo)
        L.latLng(this.unlamCoords as any) // Destino fijo: UNLaM
      ],
      lineOptions: {
        styles: [{ color: '#8b0000', weight: 5 }], // Línea en tu rojo profundo
        extendToWaypoints: true,
        missingRouteTolerance: 0
      },
      routeWhileDragging: true,
      language: 'es'
    }).addTo(this.map);
  }
}