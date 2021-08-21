import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public componente:any;
  constructor() {

    if (localStorage){
    if(localStorage.getItem('listadoOperaciones') === undefined  || localStorage.getItem('listadoOperaciones') === null ){
     console.log('app');
      let valores = [{campos:[]}];
      localStorage.setItem('listadoOperaciones', JSON.stringify(valores));
    }
  }
  }

  horaGlobal(){
    let dformat = new Intl.DateTimeFormat('default',{'month':'numeric','day':'numeric','year':'numeric','hour':'numeric','minute':'numeric'});  
    let tiempo = new Date();
    return dformat.format(tiempo);
   }
}
