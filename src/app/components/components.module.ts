import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenubajoComponent } from './menubajo/menubajo.component';



@NgModule({
  declarations: [MenubajoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[MenubajoComponent]
  
})
export class ComponentsModule { }
