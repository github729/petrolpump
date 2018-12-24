import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { CollectionsPage } from "../pages/collections/collections";
import { DieselPage } from "../pages/diesel/diesel";
import { MenuPage } from "../pages/menu/menu";
import { PetrolPage } from "../pages/petrol/petrol";
import { SearchPage } from "../pages/search/search";
import { TabsPage } from "../pages/tabs/tabs";
import { UnitPricesPage } from "../pages/unitprices/unitprices";
import { GetingNozzlesProvider } from "../providers/geting-nozzles/geting-nozzles";

import { MyApp } from "./app.component";

@NgModule({
  declarations: [
    MyApp,
    PetrolPage,
    DieselPage,
    UnitPricesPage,
    TabsPage,
    MenuPage,
    CollectionsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: "top" })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PetrolPage,
    DieselPage,
    UnitPricesPage,
    TabsPage,
    MenuPage,
    CollectionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GetingNozzlesProvider
  ]
})
export class AppModule {}
