import { Component } from "@angular/core";

import { DieselPage } from "../diesel/diesel";
import { PetrolPage } from "../petrol/petrol";
import { UnitPricesPage } from "../unitprices/unitprices";

@Component({ templateUrl: "tabs.html" })
export class TabsPage {
  tab1Root = PetrolPage;
  tab2Root = DieselPage;
  tab3Root = UnitPricesPage;

  constructor() {}
}
