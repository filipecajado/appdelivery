import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryAppComponent } from './pages/delivery/deliveryapp.component';

const routes: Routes = [
  { path: 'deliveryapp', component: DeliveryAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
