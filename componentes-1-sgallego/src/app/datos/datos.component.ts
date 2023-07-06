import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class DatosComponent{
  // Llamamos a la tabla / array con los objetos almacenados
  @Input() tabla: any;
  // Creamos un método que busque en la array el id del objeto que queremos eliminar
  eliminar(id: number){
    for (let i = 0; i < this.tabla.length; i++) {
      if(this.tabla[i].id === id){
        this.tabla.splice(i, 1);
      }
    }
  }

}
