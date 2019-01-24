import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GettingRecordssProvider } from '../../providers/records/getting-records';

/**
 * Generated class for the CollectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html',
})
export class CollectionsPage {
  filterValue: any = 'yestarday';
  totalRecords: any = [];
  petrolRecords: any = [];
  dieselRecords: any = [];
  totalPetrolAmount: number = 0;
  totalDieselAmount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recordsApi: GettingRecordssProvider) {

  }

  ionViewDidLoad() {
    this.getFilterData();
  }
  onSegmentChange() {
    this.dieselRecords = [];
    this.petrolRecords = [];
    this.totalRecords = [];
    this.totalPetrolAmount = 0;
    this.totalDieselAmount = 0;

    this.getFilterData();
  }

  getFilterData() {
    let filterObj = {
      date: this.filterValue
    }
    this.recordsApi.search(filterObj).subscribe(data => {
      this.totalRecords = data['data'];
      for (let i = 0; i < this.totalRecords.length; i++) {
        let totalLiters = 0;
        let totalAmount = 0;
        for (let j = 0; j < this.totalRecords[i].Records.length; j++) {
          totalLiters = totalLiters + (this.totalRecords[i].Records[j].closingReading - this.totalRecords[i].Records[j].openingReading);
          totalAmount = totalAmount + (this.totalRecords[i].Records[j].closingReading - this.totalRecords[i].Records[j].openingReading) * this.totalRecords[i].Records[j].rate;
          this.totalRecords[i].totalLiters = totalLiters;
          this.totalRecords[i].totalAmount = totalAmount;
        }
      };
      this.totalRecords.forEach((record, index) => {
        if (record.fuelType == 'petrol') {
          this.totalPetrolAmount = this.totalPetrolAmount + record.totalAmount;
          this.petrolRecords.push(record);
        } else {
          this.totalDieselAmount = this.totalDieselAmount + record.totalAmount;
          this.dieselRecords.push(record);
        }
      })
    })
  }

}
