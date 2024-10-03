import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotaComponent } from './componentes/nota/nota.component';
import { ComponentesModule } from './componentes/componentes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentesModule],
  //hay que meter el modulo y no el componente
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo';
}
