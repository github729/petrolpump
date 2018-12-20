import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({selector: 'page-petrol', templateUrl: 'petrol.html'})
export class PetrolPage {
  constructor(public navCtrl: NavController) {}
  rate: any = 78.52;
  openingReading: any = 1234569.235;
  closingReading: any;
  totalAmount: any;
  compute() {
    this.totalAmount = (this.closingReading - this.openingReading) * this.rate;
  }
}
