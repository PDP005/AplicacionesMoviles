import { Component } from '@angular/core';

@Component({
  selector: 'app-nota',
  standalone: false,
  templateUrl: './nota.component.html',
  styleUrl: './nota.component.css'
})
export class NotaComponent {
  
  asignatura:string="mates";
  nombre:string="pepe ";
  nota:number=6;
  aprobado:string="";
}
