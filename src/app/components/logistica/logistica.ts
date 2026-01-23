// logistica.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logistica',
  templateUrl: './logistica.html'
})
export class LogisticaComponent implements OnInit {
  esAmigo: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.esAmigo = params['auth'] === 'amigos';
    });
  }

  abrirMaps(url: string) {
    window.open(url, '_blank');
  }
}