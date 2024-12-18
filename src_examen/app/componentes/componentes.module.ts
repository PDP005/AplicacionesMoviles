import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CabeceraComponent,PieComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
  CabeceraComponent,PieComponent
  ]
})
export class ComponentesModule { }
