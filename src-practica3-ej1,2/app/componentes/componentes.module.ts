import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaComponent } from './nota/nota.component';



@NgModule({
  declarations: [NotaComponent],
  imports: [
    CommonModule
  ],
  exports:[NotaComponent]
  //hay que exportarlo
})
export class ComponentesModule { }
