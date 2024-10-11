import { Component } from '@angular/core';


@Component({
  selector: 'app-nombres',
  standalone: false,
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})
export class NombresComponent {
  l_nombres:string[]=[];
  nombre:string=" ";
  
  agregarnombre(){
    //console.log("entro");
    if(this.nombre.trim()){
      //console.log("si")
      this.l_nombres.push(this.nombre)
      console.log(this.nombre);
      console.log(this.l_nombres);
      this.nombre=''
      document.getElementById("s")?.focus()

    }
  }
  eliminarnombre(){
    for(let i=0; i<this.l_nombres.length;i++ ){
      console.log("hay")
      if(this.nombre.trim()==this.l_nombres[i]){
        console.log("existe")
        this.l_nombres[i]=""
        return
      }
  }
}

}
