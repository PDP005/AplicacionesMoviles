import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/PersonajesComponent';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PersonajesComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    PersonajesComponent
  ]
})
export class PaginasModule { }
