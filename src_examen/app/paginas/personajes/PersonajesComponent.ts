import { Component } from '@angular/core';
import { Result } from '../Interfaz/IPersonajes';
import { ServicioService } from '../Servicio/servicio.service';
import { IInfo } from '../Interfaz/IDetalles';


@Component({
  selector: 'app-personajes',
  standalone: false,
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  listaPers: Result[] = [];
  prota: Result[] = [];
  actual: IInfo | undefined;

  constructor(private data: ServicioService) {}
  ngOnInit() {
    this.data.getPersonajes().subscribe(
      array_datos => {
        array_datos.results.forEach(d => {  
          if ( d.uid!="1") this.listaPers.push(d); 
          else this.prota.push(d)}
        );
      }
    );
  }
  info(id: string) {
    this.actual = undefined;
    this.actual = this.data.sacarUno(id);
  }
  /*
  public getLista() {
    return this.listaPers;
  }
  */
}
