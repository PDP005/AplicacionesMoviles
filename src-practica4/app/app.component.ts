import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PelisComponent } from './pelis/pelis.component';
import { SeriesComponent } from './series/series.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PelisComponent,SeriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Ejemplo';
}
