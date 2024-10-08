import { Component } from '@angular/core';
import { Ipelis } from './Peliculas';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-pelis',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pelis.component.html',
  styleUrl: './pelis.component.css'
})
export class PelisComponent {
  //peliculas es el nombre del array de tipo ipelis
  peliculas:Ipelis[] = [
    {titulo: 'si',director: 'si',ano: 200},
    {titulo: 'no',director: 'no',ano: 100}
  ];
  /*
  trackByTitulo(index: number, Peliculas: Ipelis): string {
    return Peliculas.titulo;
  }
  */
}
