import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContenidohomeService {
  public contenidoHome : any;
 
  public campode: Array<{es:Array<{id:String,titulo:String,url:String,icono: String}>,in:Array<{id:String,titulo:String,url:String,icono: String}>,por:Array<{id:String,titulo:String,url:String,icono: String}>}>;
  public campode01: Array<{es:Array<{id:String,titulo:String,url:String,icono: String}>,in:Array<{id:String,titulo:String,url:String,icono: String}>,por:Array<{id:String,titulo:String,url:String,icono: String}>}>;

  constructor() { 
   
    this.contenidoHome = [{
      titulo:[{
          titulo:'AppTdi 2.0',descripcion:'informacion de la empresas'
      }],
      contenido:[{
        contenido:'informacion sobre la app',
        logo:'./assets/imagenes/logotdi.png',
        
      }]
    }];
   

    this.campode=[{
      es:[
          {id:'si1',titulo:'Activacion',url:'/activacion',icono:'ribbon-outline'},
          {id:'si2',titulo:'Manual',url:'/manual',icono:'reader-outline'},
          {id:'si1',titulo:'Consultas',url:'/consultas',icono:'analytics-outline'},
          {id:'si2',titulo:'Ver Resultados',url:'/resultados',icono:'stats-chart-outline'}
           ],
      in:[
        {id:'si1',titulo:'Apptdi',url:'carrusel',icono:'ios-bulb-outline'},
        {id:'si2',titulo:'Manual',url:'disclaimer',icono:'ios-book-outline'},
        {id:'si1',titulo:'Acerca de Nosotros',url:'manual',icono:'ios-contacts-outline'},
        {id:'si2',titulo:'Disclaimer',url:'no2',icono:'hand'}
          ],
      por:[
        {id:'si1',titulo:'Apptdi',url:'no1',icono:'ios-bulb-outline'},
        {id:'si2',titulo:'Manual',url:'no2',icono:'ios-book-outline'},
        {id:'si1',titulo:'Acerca de Nosotros',url:'no1',icono:'ios-contacts-outline'},
        {id:'si2',titulo:'Disclaimer',url:'no2',icono:'hand'}
          ]
      }];

      this.campode01=[{
        es:[
            {id:'si1',titulo:'Activacion',url:'/activacion',icono:'ribbon-outline'},
           ],
        in:[
          {id:'si1',titulo:'Apptdi',url:'carrusel',icono:'ios-bulb-outline'},
            ],
        por:[
          {id:'si1',titulo:'Apptdi',url:'no1',icono:'ios-bulb-outline'},
           ]
        }];

  }
}
