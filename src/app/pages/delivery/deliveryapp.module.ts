import { NgModule } from "@angular/core";
import { DeliveryAppComponent } from "./deliveryapp.component";
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from "@angular/common";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DeliveryAppComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule
  ],
  providers: []
})
export class DeliveryAppModule { }
