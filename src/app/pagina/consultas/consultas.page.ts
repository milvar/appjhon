import { Component, OnInit } from '@angular/core';
import { DecisionesService } from 'src/app/servicio/decisiones.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  public ten:any;
  public loc:any;
  public loc1:any;
  public cont:any;
  public cont1:any;
  public cont2:any;
  public resultado:any;
  public tiempo:any;
  public arrayb:any;
  public marco:any;

    consulta ={
      activos:'',
      valini:'',
      tiempo:'',
      data1:'',
      data3:'',
      data4:''
  
    };
  
    constructor(private contenido:DecisionesService,public alertController: AlertController) {

     }
     onSelectChange2(selectedValue: any) { this.cont2 = selectedValue.detail.value;  if(this.cont2 != null){document.getElementById("tenden").removeAttribute("disabled");} }
     onSelectChange(selectedValue: any) { this.loc1 =  this.loc[0][selectedValue.detail.value];}
     onSelectChange1(selectedValue: any) { this.cont1 =  this.cont[0][selectedValue.detail.value];}
  
    ngOnInit() {
      this.ten = this.contenido.ten;
      this.loc = this.contenido.loc;
      this.cont = this.contenido.cont;
      this.tiempo = this.contenido.tiempo;
      this.resultado = this.contenido.resultado;
    }

    sumarTiempo(tiempo){
      let dformat = new Intl.DateTimeFormat('default',{'month':'numeric','day':'numeric','year':'numeric','hour':'numeric','minute':'numeric'});  
      let tiempoini = new Date();
      let tiempooperacion = new Date();
      let tipo;
      
      if((tiempo % 5) == 0  ){
        tiempooperacion.setMinutes(tiempooperacion.getMinutes() + tiempo);  
        tipo = 'Minutos';
      }else{
        tiempooperacion.setHours(tiempooperacion.getHours() + tiempo);
        tipo = 'Horas';
      }
      return Array(dformat.format(tiempoini),dformat.format(tiempooperacion),tipo);
    }
  
    guardarData(camposoperacion){
  
      let campos = JSON.parse(localStorage.getItem('listadoOperaciones'));
      console.log(campos);
      if(3 > campos[0]['campos'].length){
       
          campos[0]['campos'].push(camposoperacion);
          localStorage.setItem('listadoOperaciones', JSON.stringify(campos));
          
      }else{
        this.presentAlert();
      }
      
    }

    consultar(){
      let tm = this.cont2.split('-');
      let timp = this.sumarTiempo(parseInt(tm[1], 10));
      this.consulta.data4 = this.cont1[0]['id'];
      this.consulta.tiempo = tm[1];
      let tiempofinal = timp[1];
      let tiempoinicio = timp[0];
  
      this.arrayb = [{campos:[]}];
      let m ={
      id: Math.floor(Math.random()*(100000000+1)),
      tiempo:this.consulta.tiempo + ' ' +timp[2],
      valorIni: this.consulta.valini,
      tiempoini: tiempoinicio,
      tiempofin: tiempofinal,
      activos: this.consulta.activos,
      accion: this.resultado[0][this.cont1[0]['id']][0]['accion'],
      prioridas:this.resultado[0][this.cont1[0]['id']][0]['prioridas'],
      mensaje:''};
    
      this.guardarData(m);
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: '!!Alerta',
        subHeader: 'Informacion Importante',
        message: 'Superaste las 3 operaciones continuas.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
}
