// src/app/components/sidebar/sidebar.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  isCollapsed = false;

  navItems = [
    { label: 'Inicio', icon: '🏠', anchor: '#hero' },
    { label: 'Cronograma', icon: '📅', anchor: '#logistica' },
    { label: 'Mapa Campus', icon: '📍', anchor: '#mapa' },
    { label: 'Protocolo', icon: '🛡️', anchor: '#instrucciones' },
    { label: 'FAQ', icon: '❓', anchor: '#faq' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}