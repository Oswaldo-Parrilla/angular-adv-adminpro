import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styles: [
  ]
})
export class IncrementsComponent implements OnInit {

  ngOnInit() {
    this.btnClass =  `btn ${ this.btnClass }`;
  } 

  @Input('value') progres: number = 50;  // @Input() progres: number = 50; 
  @Input() btnClass: string = 'btn-info' 

  @Output('valueOut') outValue: EventEmitter<number> = new EventEmitter();

//Metodo para controlar el progress (el boton del componente), no mas de 100 y no menos de 0
  changeValueBotton (value: number ) {
    if (this.progres >= 100 && value >= 0) {
      this.outValue.emit(100);
      return this.progres = 100;
    } 
    if ( this.progres <= 0 && value <=0) {
      this.outValue.emit(0);
      return this.progres = 0;
    }
  
    this.progres = this.progres + value;
    this.outValue.emit( this.progres );
  }

//Metodo para controlar el progress mediante el input
  onChangeInput( newChange: number ) {
    if( this.progres >= 100 ) {
      this.progres = 100;
    } else if( this.progres <= 0) {
      this.progres = 0;
    } else {
      this.progres = newChange;
    }
    this.outValue.emit ( this.progres );
  }
  
}
