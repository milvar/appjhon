import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.page.html',
  styleUrls: ['./activacion.page.scss'],
})
export class ActivacionPage implements OnInit {


  activa ={
    nombres:'',
    apellidos:'',
    correo:'',
    activacion:'',
    termino:''
  };
  public datam:any;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
  }

  
  activar() {
    const options = {
      headers: {
       'Content-Type': 'application/x-www-form-urlencoded'
     }
   };
   this.datam = [this.activa.nombres + ' ' + this.activa.apellidos];    
   
    this.httpClient.post('http://localhost/apptdi1.1/modelo/nuevaPersona.php',JSON.stringify(this.activa),options).subscribe(data=>{
      if(data){
        this.datam.push(data);
        localStorage.setItem('datospersona', JSON.stringify(this.datam));
        console.log(this.datam);
      }
    },
    (err)=>{
      console.log(err);
    }
    );
  }

  

}
