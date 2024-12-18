import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ComponentesModule } from './componentes/componentes.module';
import { PaginasModule } from './paginas/paginas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentesModule,RouterLink,PaginasModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
