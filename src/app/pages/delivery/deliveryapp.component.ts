import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-deliverypp',
  templateUrl: './deliveryapp.component.html',
  styleUrls: ['./deliveryapp.component.scss']
})
export class DeliveryAppComponent implements OnInit {


  sabores: any[] = []

  async ngOnInit(): Promise<void> {
    const spreadsheetID = '1LNmBKLG9MTwLfPsJr4EAfJLE5XC-bgbxMe3C-7AZ16g'
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetID}/gviz/tq?tqx=out:json`

    let data = await fetch(url)
      .then(res => res.text())
      .then(text => JSON.parse(text.substr(47).slice(0, -2)))

    this.sabores = data.table.rows
      .map((row: { c: { [x: string]: { v: any; }; }; }) => [...data.table.cols.map((col: { label: any; }, index: string | number) => ({ [col.label]: row.c[index].v, }))])
      .map((data: any[]) => data.reduce((acc: any, value: any) => ({ ...acc, ...value }), {}));
  }

  //  parser({table}){
  //   return table.rows
  //     .map((row: { c: { [x: string]: { v: any; }; }; }) => [ ...table.cols.map((col: { label: any; }, index: string | number) => ({[col.label]: row.c[index].v,}))])
  //     .map((data: any[]) => data.reduce((acc: any, value: any) =>  ({...acc, ...value}), {}))
  // }


  addQuant(item: any) {
    const itemfound = this.sabores.find(s => s.id == item.id)
    itemfound.quant++
  }
  removeQuant(item: any) {
    const itemfound = this.sabores.find(s => s.id == item.id)
    if (item.quant > 0) {
      itemfound.quant--
    }
  }



  enviar() {
    const espaco = "%20";
    const quebralinha = "%0A%0A";
    const quebra2linha = "%0A%0A%0A";

    let mensagem = `Pedido${quebralinha}`;

    let total = 0;

    this.sabores.forEach(sabor => {
      if (sabor.quant > 0) {
        mensagem += `${sabor.quant}${espaco}-${espaco}${sabor.name}${quebralinha}`;
        total += sabor.quant * 3;
      }
    });


    mensagem += `${quebralinha}Total%3A${espaco}R$${total}`;

    const link = `https://wa.me/5527992235985?text=${mensagem}`;

    window.location.href = link;
  }
}
function parser(data: any): any {
  throw new Error("Function not implemented.");
}

