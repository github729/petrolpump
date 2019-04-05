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
import { TabsPage } from "../pages/tabs/tabs";
import { UnitPricesPage } from "../pages/unitprices/unitprices";

import { MyApp } from "./app.component";
import { GettingRecordssProvider } from "../providers/records/getting-records";
import { LoginPage } from "../pages/login/login";
import { MainPage } from "../pages/main/main";

@NgModule({
  declarations: [
    MyApp,
    PetrolPage,
    DieselPage,
    UnitPricesPage,
    TabsPage,
    MenuPage,
    CollectionsPage,
    LoginPage,
    MainPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: "bottom" })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PetrolPage,
    DieselPage,
    UnitPricesPage,
    TabsPage,
    MenuPage,
    CollectionsPage,
    LoginPage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GettingRecordssProvider
  ]
})
export class AppModule {}
