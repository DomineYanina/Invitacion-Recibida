import { Component } from '@angular/core';
import { PlayerComponent } from '../player/player';

@Component({
  selector: 'app-footer',
  imports: [PlayerComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
