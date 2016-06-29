"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ionic_angular_1 = require('ionic-angular');
var moment = require('moment');
// import {CalculatorModel} from './models/calculator.model.ts';
// import {CalculatorService} from './services/calculator-service';
var HomePage = (function () {
    function HomePage(navController) {
        this.navController = navController;
        //Pesover:
        this.v1Start = "2016/04/22";
        this.v1End = "2016/04/29";
        //Summer break:
        this.v2Start = "2016/07/21";
        this.v2End = "2016/09/05";
        //Yum Kipor:
        this.v3Start = "2016/10/12";
        this.v3End = "2016/10/12";
        //Sukot:
        this.v4Start = "2016/10/16";
        this.v4End = "2016/10/23";
    }
    HomePage.prototype.calculate = function () {
        var calculatedDate = moment(this.startDate, 'YYYY-MM-DD').add(this.daysToAdd, 'days');
        var v1Start = moment(this.v1Start, 'YYYY/MM/DD');
        var v1End = moment(this.v1End, 'YYYY/MM/DD');
        var v2Start = moment(this.v2Start, 'YYYY/MM/DD');
        var v2End = moment(this.v2End, 'YYYY/MM/DD');
        var v3Start = moment(this.v3Start, 'YYYY/MM/DD');
        var v3End = moment(this.v3End, 'YYYY/MM/DD');
        var v4Start = moment(this.v4Start, 'YYYY/MM/DD');
        var v4End = moment(this.v4End, 'YYYY/MM/DD');
        var selectedDate = moment(this.startDate, 'YYYY-MM-DD');
        //term break skip:
        for (var i = 1; i <= this.daysToAdd; i++) {
            selectedDate.add(1, 'days');
            //Pesover Break:
            if (selectedDate >= v1Start && selectedDate <= v1End) {
                selectedDate.add(v1End.diff(v1Start, 'days'), 'days');
                selectedDate.add((this.daysToAdd - i), 'days');
                this.result = selectedDate.format('DD/MM/YYYY');
                break;
            }
            //Summer Break:
            if (selectedDate >= v2Start && selectedDate <= v2End) {
                selectedDate.add(v2End.diff(v2Start, 'days'), 'days'); //add the break days sum
                selectedDate.add((this.daysToAdd - i), 'days'); //add the remaining days
                this.result = selectedDate.format('DD/MM/YYYY');
                break;
            }
            //Sukot Break:
            if (selectedDate >= v4Start && selectedDate <= v4End) {
                selectedDate.add(v4End.diff(v4Start, 'days'), 'days'); //add the break days sum
                selectedDate.add((this.daysToAdd - i), 'days'); //add the remaining days
                this.result = selectedDate.format('DD/MM/YYYY');
                break;
            }
            // else
            this.result = selectedDate.format('DD/MM/YYYY');
        }
        //Yum Kipor:
        if (calculatedDate >= v3Start && calculatedDate <= v3End)
            this.result = v3End.add(1, 'days').format('DD/MM/YYYY');
        //Friday:
        if (moment(this.result, 'DD/MM/YYYY').day() == 5)
            this.result = moment(this.result, 'DD/MM/YYYY').add(2, 'days').format('DD/MM/YYYY');
        else if (moment(this.result, 'DD/MM/YYYY').day() == 6)
            this.result = moment(this.result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
        ////Pesover:
        // if (calculatedDate >= v1Start && calculatedDate <= v1End){
        //   this.result = v1End.add(1, 'days').format('DD/MM/YYYY');
        // }
        ////Summer break:
        // if (calculatedDate >= v2Start && calculatedDate <= v2End){
        //   this.result = v2End.add(1, 'days').format('DD/MM/YYYY');
        // }
        // ////Yum Kipor:
        // else if (calculatedDate >= v3Start && calculatedDate <= v3End){
        //   this.result = v3End.add(1, 'days').format('DD/MM/YYYY');
        // }
        // ////Sukot:
        // else if (calculatedDate >= v4Start && calculatedDate <= v4End){
        //   this.result = v4End.add(1, 'days').format('DD/MM/YYYY');
        // }
        // ////Just add daysToAdd:
        // else{
        //   this.result = calculatedDate.format('DD/MM/YYYY');
        // }
        // //Friday:
        // if(moment(this.result, 'DD/MM/YYYY').day() == 5)
        //   this.result = moment(this.result, 'DD/MM/YYYY').add(2, 'days').format('DD/MM/YYYY');
        // //Saturday
        // else if(moment(this.result, 'DD/MM/YYYY').day() == 6)
        //   this.result = moment(this.result, 'DD/MM/YYYY').add(1, 'days').format('DD/MM/YYYY');
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
