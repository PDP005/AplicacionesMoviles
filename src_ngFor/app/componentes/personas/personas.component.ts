import { Component } from '@angular/core';
import { IPersona } from '../IPersona';
import {  NgFor } from '@angular/common';


@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  lista:IPersona[]=[];

  constructor(){
    this.lista=[
      {
        nombre:"Rosa",
        edad:34,
      },
      {
        nombre:"Juan",
        edad:40
      },
      {
        nombre:"Ana",
        edad:53,
      }
    ]
  }
}
