import { NgModule } from "@angular/core";
import { DeliveryAppComponent } from "./deliveryapp.component";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive, RouterOutlet } from "@angular/router";

@NgModule({
  declarations: [
    DeliveryAppComponent
  ],
  imports: [
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet, CommonModule, RouterOutlet, RouterLinkActive, MatButtonModule
  ],
  providers: []
})
export class DeliveryAppModule { }
