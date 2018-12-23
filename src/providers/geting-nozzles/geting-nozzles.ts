import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetingNozzlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetingNozzlesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetingNozzlesProvider Provider');
  }

  gettingNozzlesData(fuel) {
   return  this.http.get(`http://localhost:1332/v1/${fuel}`)
   .pipe()
  }
  saveRecords(submitObj) {
    return this.http.post('http://localhost:1332/v1/records',submitObj)
  }

}
