import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubajo',
  templateUrl: './menubajo.component.html',
  styleUrls: ['./menubajo.component.scss'],
})
export class MenubajoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  ir(){
    this.router.navigate(['/home'])
  }

}
