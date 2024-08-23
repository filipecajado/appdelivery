import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-deliverypp',
  templateUrl: './deliveryapp.component.html',
  styleUrls: ['./deliveryapp.component.scss']
})
export class DeliveryAppComponent implements OnInit{

  sabores: string[] = ["Coco", "Chocolate"]
  ngOnInit(): void {

  }

}
