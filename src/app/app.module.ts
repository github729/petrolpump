import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { DieselPage } from "../pages/diesel/diesel";
import { PetrolPage } from "../pages/petrol/petrol";
import { TabsPage } from "../pages/tabs/tabs";
import { UnitPricesPage } from "../pages/unitprices/unitprices";

import { MyApp } from "./app.component";

@NgModule({
  declarations: [MyApp, PetrolPage, DieselPage, UnitPricesPage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: "top" })
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, PetrolPage, DieselPage, UnitPricesPage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
