import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

import {DieselPage} from '../diesel/diesel';
import {PetrolPage} from '../petrol/petrol';
import {UnitPricesPage} from '../unitprices/unitprices';

@Component({templateUrl: 'tabs.html'})
export class TabsPage {
  tab1Root = PetrolPage;
  tab2Root = DieselPage;
  tab3Root = UnitPricesPage;
  myIndex: number;

  constructor(navParams: NavParams) {
    // Set the active tab based on the passed index from menu.ts
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
