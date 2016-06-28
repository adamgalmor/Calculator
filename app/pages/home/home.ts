import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import * as moment from 'moment';
// import {CalculatorModel} from './models/calculator.model.ts';
// import {CalculatorService} from './services/calculator-service';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  startDate: Date;
  daysToAdd: number;
  result: string
  vecationStart = moment("2016/01/01");
  vecationEnd = moment("2016/01/05");

  constructor(private navController: NavController) {

  }

  calculate() {
    let calculatedDate = moment(this.startDate).add(this.daysToAdd,'days');

    // alert('start date: ' + this.startDate);
    // alert('daysToAdd: ' + this.daysToAdd);
    // alert('calculatedDate: ' + moment(calculatedDate).format('DD/MM/YYYY'));


    if (calculatedDate >= this.vecationStart && calculatedDate <= this.vecationEnd){
      this.result = this.vecationEnd.add(1, 'days').format('DD/MM/YYYY');
    }
    else{
      this.result = calculatedDate.format('DD/MM/YYYY');
    }
  }
}
