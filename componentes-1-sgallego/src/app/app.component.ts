import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  title = 'componentes-1-sgallego';
  // Creamos una tabla donde vamos a guardar cada objeto que introduzcamos en el formulario y guardemos
  tabla: any[] = [];
  // Creamos un contador a 0 que nos servirá como identificador para cada objeto
  cont: number = 0;

  constructor(){
  }
  // Creamos un método para guardar cada objeto introducido en el formulario en la array. Delante le añadimos el atributo id para identificarlo y sumamos el contador para que cada entrada sea única
  guardar(form: any){
    const formDatos = {id: this.cont, nombre: form.nombre, cif: form.cif, direccion: form.direccion, grupo: form.grupo};
    this.tabla.push(formDatos);
    this.cont++;
  }

}
