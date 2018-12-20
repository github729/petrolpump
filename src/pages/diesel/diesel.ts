import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({ selector: "page-diesel", templateUrl: "diesel.html" })
export class DieselPage {
  rate: any = 54.52;
  b1OpeningReading: any = 1234569.235;
  b2OpeningReading: any = 234569.235;
  b3OpeningReading: any = 34569.235;
  b1ClosingReading: any;
  b2ClosingReading: any;
  b3ClosingReading: any;
  b1TotalAmount: any;
  b2TotalAmount: any;
  b3TotalAmount: any;

  constructor(public navCtrl: NavController) {}
  b1Compute() {
    this.b1TotalAmount =
      (this.b1ClosingReading - this.b1OpeningReading) * this.rate;
    console.log(this.b1ClosingReading);
    console.log(this.b1OpeningReading);
  }
  b2Compute() {
    this.b2TotalAmount =
      (this.b2ClosingReading - this.b2OpeningReading) * this.rate;
  }
  b3Compute() {
    this.b3TotalAmount =
      (this.b3ClosingReading - this.b3OpeningReading) * this.rate;
  }
}
