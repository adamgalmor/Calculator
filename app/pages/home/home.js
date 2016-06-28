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
        this.vecationStart = moment("2016/01/01");
        this.vecationEnd = moment("2016/01/05");
    }
    HomePage.prototype.calculate = function () {
        var calculatedDate = moment(this.startDate).add(this.daysToAdd, 'days');
        // alert('start date: ' + this.startDate);
        // alert('daysToAdd: ' + this.daysToAdd);
        // alert('calculatedDate: ' + moment(calculatedDate).format('DD/MM/YYYY'));
        if (calculatedDate >= this.vecationStart && calculatedDate <= this.vecationEnd) {
            this.result = this.vecationEnd.add(1, 'days').format('DD/MM/YYYY');
        }
        else {
            this.result = calculatedDate.format('DD/MM/YYYY');
        }
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
