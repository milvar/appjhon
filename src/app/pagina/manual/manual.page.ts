import { Component, OnInit } from '@angular/core';
import { ManualService } from 'src/app/servicio/manual.service';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {

  public data : any;

 constructor(private conten:ManualService) {

this.data = this.conten.manualcom[0]['en'];


 }

 ngOnInit() {
 }

}
