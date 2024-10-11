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
  
    {caratula:"assest/imagenes/Superman-js.jpg", titulo: 'si',director: 'si',ano: 200,sinopsis:'',puntuacion:0},
    {caratula:'', titulo: 'no',director: 'no',ano: 100,sinopsis:'',puntuacion:0},   
  ];
  /*
  trackByTitulo(index: number, Peliculas: Ipelis): string {
    return Peliculas.titulo;
  }
  */
}
