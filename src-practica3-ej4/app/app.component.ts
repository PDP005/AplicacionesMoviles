import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModuloModule } from './nombres/modulo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ModuloModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo';
}
