import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  public data:any;
  public array:any;

  constructor(private active:ActivatedRoute,private app: AppComponent,public alertController: AlertController) {
 
    this.cargaroperaciones();

  }

  ngOnInit() {

  }

  borrar(id){
   let gua;
      this.data[0]['campos'] = this.data[0]['campos'].filter(function(car) {
          return car.id !== id; 
      });
      gua = this.array;
      localStorage.setItem('listadoOperaciones', JSON.stringify(gua));

  }

  guardar(val,id){
 

  }

validaractivo(tm2,tm1){
     
  return tm1 < tm2 ? "Operacion Activa" : "Operacion Finalizada";
 
}

cargaroperaciones(){
    this.data = JSON.parse(localStorage.getItem('listadoOperaciones'));

  if(this.data[0]['campos'].length > 0){
    console.log(10);
    for(let mn=0; this.data[0]['campos'].length > mn; mn++){   
      console.log(105);
      this.data[0]['campos'][mn]['mensaje'] = this.validaractivo(this.data[0]['campos'][mn]['tiempofin'],this.app.horaGlobal());
      }
     }
    /* else{
      console.log(this.data[0]['campos'].length);
      this.data[0]['campos'][0]['mensaje'] = this.validaractivo(this.data[0]['campos'][0]['tiempofin'],this.app.horaGlobal());
     }*/

}

async cerrarOperacion(id) {
  const alert = await this.alertController.create({
    header: 'Cerrar Transaccion',
    subHeader: 'Informacion Importante',
    message: 'llenar estos campos te permitira descargar tus estadisticas.',
    inputs: [
      {
        name: 'valorfinal',
        placeholder: 'Valor de activo'
        
      },
    ],
    buttons: [{
      text:"guardar",
      handler:(data)=>{
        this.guardar(data.valorfinal,id);
        this.borrar(id);
      }
    }]
  });
  await alert.present();
}
  


}
