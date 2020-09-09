import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: []
})
export class Grafica1Component {

  public graphicLabels2: string[] = ['Compras1', 'Compras2', 'Compras3'];
  public graphicData2 = [
    [250, 250, 250],
  ];
  // public graphicColors2 = { backgroundColor: ['#009FEE', '#009FEE', '#009FEE'] };

  public graphicLabels3: string[] = ['Consumo1', 'Consumo2', 'Consumo3'];
  public graphicData3 = [
    [150, 100, 200],
  ];
}
