import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NombresComponent } from './lista_nombres/nombres.component';


@NgModule({
  declarations: [NombresComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    NombresComponent
  ]
})
export class ModuloModule { }
