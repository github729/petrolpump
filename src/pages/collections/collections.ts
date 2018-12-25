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
  filterValue: any = 'today';
  totalRecords: any = [];
  petrolRecords: any = [];
  dieselRecords: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private recordsApi: GettingRecordssProvider) {

  }

  ionViewDidLoad() {
    this.getFilterData();
  }
  onSegmentChange() {
    this.getFilterData();

  }

  getFilterData() {
    let filterObj = {
      date: this.filterValue
    }
    this.recordsApi.search(filterObj).subscribe(data => {
      this.totalRecords = data['data'];
      this.totalRecords.forEach(record => {
        if (record.fuelType == 'petrol') {
          this.petrolRecords.push(record);
        } else {
          this.dieselRecords.push(record);
        }
      });
      console.log(this.petrolRecords,this.dieselRecords)
    })
  }

}
