import { Component } from '@angular/core';
import { ContenidohomeService } from '../servicio/contenidohome.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public titulo:any;
  public idio:any;
  public logo:any;
  public data:any;

  constructor(private contenbasico:ContenidohomeService) {
  this.titulo = this.contenbasico.contenidoHome[0]['titulo'][0]['titulo'];

  this.data = JSON.parse(localStorage.getItem('datospersona'));
  if(this.data){
    this.idio = this.contenbasico.campode[0]['es'];
  }else{
    this.idio = this.contenbasico.campode01[0]['es'];
  }

  
  this.logo = this.contenbasico.contenidoHome[0]['contenido'][0]['logo'];



  }


}