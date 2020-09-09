import { NgModule } from '@angular/core';
//Modulos
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//
import { ChartsModule } from 'ng2-charts';


import { IncrementsComponent } from './increments/increments.component';
import { DonutComponent } from './donut/donut.component';




@NgModule({
  declarations: [ 
    IncrementsComponent, 
    DonutComponent 
  ],
  exports: [
    IncrementsComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
