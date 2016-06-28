import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import * as moment from 'moment';
// import {CalculatorModel} from './models/calculator.model.ts';
// import {CalculatorService} from './services/calculator-service';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  startDate: string;
  daysToAdd: number;
  result: string
  //Pesover:
  v1Start = "2016/04/22";
  v1End = "2016/04/29";
  //Summer break:
  v2Start = "2016/07/21";
  v2End = "2016/09/05";
  //Yum Kipor:
  v3Start = "2016/10/12";
  v3End = "2016/10/12";
  //Sukot:
  v4Start = "2016/10/16";
  v4End = "2016/10/23";

  constructor(private navController: NavController) {

  }

  calculate() {
    let calculatedDate = moment(this.startDate, 'YYYY-MM-DD').add(this.daysToAdd,'days');
    let v1Start = moment(this.v1Start, 'YYYY/MM/DD');
    let v1End = moment(this.v1End, 'YYYY/MM/DD');
    let v2Start = moment(this.v2Start, 'YYYY/MM/DD');
    let v2End = moment(this.v2End, 'YYYY/MM/DD');
    let v3Start = moment(this.v3Start, 'YYYY/MM/DD');
    let v3End = moment(this.v3End, 'YYYY/MM/DD');
    let v4Start = moment(this.v4Start, 'YYYY/MM/DD');
    let v4End = moment(this.v4End, 'YYYY/MM/DD');

    //Pesover:
    if (calculatedDate >= v1Start && calculatedDate <= v1End){
      this.result = v1End.add(1, 'days').format('DD/MM/YYYY');
    }
    //Summer break:
    else if (calculatedDate >= v2Start && calculatedDate <= v2End){
      this.result = v1End.add(1, 'days').format('DD/MM/YYYY');
    }
    //YUm Kipor:
    else if (calculatedDate >= v3Start && calculatedDate <= v3End){
      this.result = v1End.add(1, 'days').format('DD/MM/YYYY');
    }
    //Sukot:
    else if (calculatedDate >= v4Start && calculatedDate <= v4End){
      this.result = v1End.add(1, 'days').format('DD/MM/YYYY');
    }
    //Just add daysToAdd:
    else{
      this.result = calculatedDate.format('DD/MM/YYYY');
    }
    //Friday:
    if(moment(this.result, 'DD/MM/YYYY').day() == 5)
      this.result = moment(this.result, 'DD/MM/YYYY').add(2, 'days').format('DD/MM/YYYY');
    //Saturday
    else if(moment(this.result, 'DD/MM/YYYY').day() == 6)
      this.result = moment(this.result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
  }
}
