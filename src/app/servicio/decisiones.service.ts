import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecisionesService {
  public ten:any;
  public loc:any;
  public cont:any;
  public resultado:any;
  public tiempo:any;

  constructor() { 

      this.ten = [{id:'A',texto:'Alcista'},{id:'B',texto:'Bajista'},{id:'L',texto:'Lateral'}];

      this.loc =[{
      A:[{id:'A1',texto:'R.Z.P.P.S: Retrocesos en Zonas de Precios Potentes Superiores'},
      {id:'A2',texto:'R.Z.P.P.I: Rebotes en Zonas de Precios Potentes Inferiores'},
      {id:'A3',texto:'R.Z.P.I: Retroceso a Zona Precios Inferiores'},
      {id:'A4',texto:'Vacio'}],
      B:[{id:'B1',texto:'R.Z.P.P.S: Retrocesos en Zonas de Precios Potentes Superiores'},
      {id:'B2',texto:'R.Z.P.P.I: Rebotes en Zonas de Precios Potentes Inferiores'},
      {id:'B3',texto:'R.Z.P.S: Rebote a Zona de Precios Superior'},
      {id:'B4',texto:'Vacio'}],
      L:[{id:'L1',texto:'R.Z.P.P.S: Retrocesos en Zonas de Precios Potentes Superiores'},
      {id:'L2',texto:'R.Z.P.P.I: Rebotes en Zonas de Precios Potentes Inferiores'},
      {id:'L3',texto:'Vacio'}]
      }];

      this.cont = [{ A1:[{id:'A11',texto:'Impulsivo Tendencia'},{id:'A12',texto:'Extremo Rango'}],
      A2:[{id:'A21',texto:'Correctivo Tendencia'},{id:'A22',texto:'Extremo Rango'}],
      A3:[{id:'A31',texto:'Correctivo Tendencia'}],
      A4:[{id:'A41',texto:'Correctivo Tendencia'},{id:'A42',texto:'Impulsivo Tendencia'}],
      B1:[{id:'B11',texto:'Correctivo Tendencia'},{id:'B12',texto:'Extremo Rango'}],
      B2:[{id:'B21',texto:'Impulsivo Tendencia'},{id:'B22',texto:'Extremo Rango'}],
      B3:[{id:'B31',texto:'Correctivo Tendencia'}],
      B4:[{id:'B41',texto:'Correctivo Tendencia'},{id:'B42',texto:'Impulsivo Tendencia'}],
      L1:[{id:'L11',texto:'Extremo Rango'}],
      L2:[{id:'L21',texto:'Extremo Rango'}],
      L3:[{id:'L31',texto:'Correctivo Tendencia'},{id:'L32',texto:'Impulsivo Tendencia'}]}];

      this.resultado = [{
      A11:[{prioridas:'Media',accion:'Esperar Largos'}],
      A12:[{prioridas:'Baja',accion:'Esperar'}],
      A21:[{prioridas:'Alta',accion:'Largos'}],
      A22:[{prioridas:'Alta',accion:'Largos'}],
      A31:[{prioridas:'Alta',accion:'Largos'}],
      A41:[{prioridas:'Baja',accion:'Esperar Largos'}],
      A42:[{prioridas:'Muy Alta',accion:'Largos'}],
      B11:[{prioridas:'Alta',accion:'Cortos'}],
      B12:[{prioridas:'Alta',accion:'Cortos'}],
      B21:[{prioridas:'Media',accion:'Esperar Cortos'}],
      B22:[{prioridas:'Baja',accion:'Esperar'}],
      B31:[{prioridas:'Alta',accion:'Cortos'}],
      B41:[{prioridas:'Baja',accion:'Esperar Cortos'}],
      B42:[{prioridas:'Muy Alta',accion:'Cortos'}],
      L11:[{prioridas:'Alta',accion:'Cortos'}],
      L21:[{prioridas:'Alta',accion:'Largos'}],
      L31:[{prioridas:'Baja',accion:'Sentarse en las Manos'}],
      L32:[{prioridas:'Baja',accion:'Sentarse en las Manos'}],
      }];

      this.tiempo = [
        {id:'1t',tiempo:'5 minutos',valor:5},
        {id:'2t',tiempo:'10 minutos',valor:10},
        {id:'3t',tiempo:'15 minutos',valor:15},
        {id:'4t',tiempo:'30 minutos',valor:30},
        {id:'5t',tiempo:'45 minutos',valor:45},
        {id:'6t',tiempo:' 1 Hora',valor:1},
        {id:'7t',tiempo:' 2 Horas',valor:2},
        {id:'8t',tiempo:' 4 Horas',valor:4},
        {id:'9t',tiempo:'12 Horas',valor:12},
        {id:'10t',tiempo:'24 Horas',valor:24}
    ];
  }
}
