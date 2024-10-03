import { Component } from '@angular/core';
import { Ipelis } from './Peliculas';
@Component({
  selector: 'app-pelis',
  standalone: true,
  imports: [],
  templateUrl: './pelis.component.html',
  styleUrl: './pelis.component.css'
})
export class PelisComponent {
  arraySitios:Ipelis[] = [
    {titulo: 'si',director: 'si',ano: 200},
    {titulo: 'no',director: 'no',ano: 100}
  ]
  
}
