import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NotasComponentComponent} from './notas-component/notas-component.component';
import {GaleriaComponent} from './galeria/galeria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NotasComponentComponent,
    GaleriaComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadesAngularMaterial';
}
