import { Component, OnInit, HostListener } from '@angular/core';

export class product{
  constructor(public batchNo: string, public productName: String,public qty:number,public price:number,public cgst:number,
              public sgst:number,public total:number,public expDate:Date){}
}

export class batchNos{
  constructor(public batchno:string){}
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
  batchDropDowns=[];
  batchNoList=[new batchNos("BD2226"),new batchNos("BD1221"),new batchNos("XD4433"),new batchNos("XD5565"),new batchNos("VD5445")];
  constructor() { }

  ngOnInit() {
    this.products.push(new product("","", 0, 0, 0, 0, 0, new Date()));
    this.batchDropDowns.push(false);
  }

 @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keypressed = event.key; 
    
  }

  addProductIntoInvoice(){
    this.batchDropDowns.push(false);
    this.products.push(new product("","", 0, 0, 0, 0, 0, new Date()));
  }

  save(){
    console.log(this.products);
  }

  selectBatchNo(){
    alert("batchno");
  }
}