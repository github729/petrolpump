import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { GettingRecordssProvider } from "../../providers/records/getting-records";

@Component({ selector: "page-diesel", templateUrl: "diesel.html" })
export class DieselPage {
  nozzlesData: any;
  totalAmount: any;
  liters: any;

  constructor(public navCtrl: NavController,
    private recordsApi: GettingRecordssProvider) {
    this.recordsApi.gettingNozzlesData('diesel').subscribe(data => {
      this.nozzlesData = data['data'];
      console.log(this.nozzlesData);
    })
  }

  compute(nozzleId, rate, openingReading, closingReading) {
    this.liters = closingReading - openingReading;
    this.totalAmount = (closingReading - openingReading) * rate;
    let submitObj = {
      openingReading: openingReading,
      closingReading: closingReading.viewModel,
      rate: rate,
      nozzleId: nozzleId
    }
    this.recordsApi.saveRecords(submitObj).subscribe(data => {
      console.log(data);
    });
  }

}
