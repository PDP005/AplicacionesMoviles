import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AboutComponent,ContactComponent,HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[AboutComponent,ContactComponent,HomeComponent]
})
export class PaginasModule { }
