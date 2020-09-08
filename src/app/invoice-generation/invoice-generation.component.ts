import { Component, OnInit, HostListener } from '@angular/core';

export class product{
  constructor(public batchNo: string, public productName: String,public qty:number,public price:number,public cgst:number,
              public sgst:number,public total:number,public expDate:Date){}
}

@Component({
  selector: 'app-invoice-generation',
  templateUrl: './invoice-generation.component.html',
  styleUrls: ['./invoice-generation.component.css']
})
export class InvoiceGenerationComponent implements OnInit {

  public keypressed;
  invoiceId=20200001;
  invoiceDate=new Date();
  products=[];
  batchNos=['BD2226','BD2227','BD2228','BD2229','BD2230','BD2231','BD2232'];
  constructor() { }

  ngOnInit() {
    this.products.push(new product("","", 0, 0, 0, 0, 0, new Date()));
  }

 @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keypressed = event.key; 
    
  }

  addProductIntoInvoice(){
    this.products.push(new product("","", 0, 0, 0, 0, 0, new Date()));
  }
}