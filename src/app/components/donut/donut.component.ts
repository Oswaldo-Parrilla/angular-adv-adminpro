import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() titleGraphic: string = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
];
  @Input('colors') colors: Color [] = [
  { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
];

}

