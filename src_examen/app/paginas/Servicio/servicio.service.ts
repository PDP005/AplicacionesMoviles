import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from '../Interfaz/IPersonajes';
import { IInfo } from '../Interfaz/IDetalles';
//import { Properties } from '../Interfaz/IDetalles';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  listaper:IInfo[]=[]
  constructor(private http: HttpClient) { 
    this.http.get<IInfo[]>('/data/detalles.json').subscribe((item) => {
      item.forEach((e) => {
          this.listaper.push(e);       
      });
    });
  }
  public getPersonajes(): Observable<RootObject>{
    return this.http.get<RootObject>("data/personajes.json");
  }
   
  public sacarUno(id: string) {
    //let indiv: IInfo[]=[];
    //console.log(this.listaper)
    return this.listaper.find((p) => p.uid == id);
    
    /*
    this.listaper.forEach(e=> {
      if(e.uid==id){
        indiv.push(e)
      }
    },
    )
    console.log(this.indiv)
*/

  }
}
