import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PaginasModule } from './paginas/paginas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaginasModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
