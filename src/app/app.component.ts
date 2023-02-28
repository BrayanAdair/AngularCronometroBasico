import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cronometro';
  mensaje='';
  mensaje2=''

  actualizar(t:number){
    this.mensaje = t+'(se tiene que actualizar cada 10 segundos)'
  }
  actualizar50(t:number){
    this.mensaje2 = t+'(se tiene que actualizar cada 100 segundos)'
  }
}
