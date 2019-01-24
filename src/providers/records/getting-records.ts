import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetingNozzlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GettingRecordssProvider {

  constructor(public http: HttpClient) {
  }

  gettingNozzlesData(fuel) {
   return  this.http.get(`http://192.168.2.21:5000/v1/${fuel}`)
   .pipe()
  }
  saveRecords(submitObj) {
    return this.http.post('http://192.168.2.21:5000/v1/records',submitObj)
  }
  search(filterData) {
    return this.http.post('http://192.168.2.21:5000/v1/filter',filterData)
  }
  
}
