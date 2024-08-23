import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryAppComponent } from './pages/delivery/deliveryapp.component';
import { DeliveryAppModule } from './pages/delivery/deliveryapp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeliveryAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
