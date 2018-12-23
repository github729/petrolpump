import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { GetingNozzlesProvider } from '../../providers/geting-nozzles/geting-nozzles';

@Component({selector: 'page-petrol', templateUrl: 'petrol.html'})
export class PetrolPage {
  nozzlesData : any;
  totalAmount: any;
  liters:any;
  constructor(public navCtrl: NavController,
    private nozzleApi : GetingNozzlesProvider) {
      this.nozzleApi.gettingNozzlesData('petrol').subscribe(data => {
        this.nozzlesData = data['data'];
      })
    }

  compute(nozzleId,rate,openingReading,closingReading) {
    this.liters = closingReading - openingReading;
     this.totalAmount = (closingReading - openingReading) * rate;
    let submitObj = {
      openingReading : openingReading,
      closingReading: closingReading.viewModel,
      rate:rate,
      nozzleId:nozzleId
    }
    this.nozzleApi.saveRecords(submitObj).subscribe(data => {
      console.log(data);
    });
  }

}
