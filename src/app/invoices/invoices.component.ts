import { Component, OnInit } from '@angular/core';

export class InvoiceDet{
  constructor(public invoiceId: string, public invoiceDate: Date, public customerName: string, public gst: number, public total: number,public paymentStatus: string, public productsDet=[]){}
}

export class ProductDet{
  constructor(public batchNo: string, public productName: string,public expDate: Date, public price:number, public quantity: number,public gst: number, public discount: number, public total: number){}
}

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  invoices = [
    new InvoiceDet('2020001',new Date(),'Test Customer 1',1260,9760,'Paid',[
      new ProductDet('XD2122','Test Product 1',new Date(),1000,2,240,0,2240),
      new ProductDet('XD2125','Test Product 2',new Date(),500,3,120,0,1620),
      new ProductDet('XD2133','Test Product 3',new Date(),5000,1,900,0,5900)
    ]),
    new InvoiceDet('2020002',new Date(),'Test Customer 2',360,3860,'Partially Paid',[
      new ProductDet('XD2122','Test Product 1',new Date(),1000,2,240,0,2240),
      new ProductDet('XD2125','Test Product 2',new Date(),500,3,120,0,1620)
    ]),
    new InvoiceDet('2020003',new Date(),'Test Customer 1',240,2240,'Unpaid',[
      new ProductDet('XD2122','Test Product 1',new Date(),1000,2,240,0,2240)
    ]),
  ];
  paymentsStatuses = ['Paid','Unpaid','Partially Paid'];
  constructor() { }

  ngOnInit() {
  }

  expandProduct(entity_id){
    console.log(this.invoices);
      var content_id = entity_id+"_content";
      var product_row_id = entity_id;
      var product_up_button_id = entity_id+"_up";
      var product_down_button_id = entity_id+"_down";
      
      document.getElementById(product_row_id).className += "card card-body boxShadow";
      document.getElementById(product_up_button_id).style.display = "block";
      document.getElementById(product_down_button_id).style.display = "none";
      document.getElementById(content_id).style.display = "flex";
  }
  restoreProduct(entity_id){
      var content_id = entity_id+"_content";
      var product_row_id = entity_id;
      var product_up_button_id = entity_id+"_up";
      var product_down_button_id = entity_id+"_down";
      
      document.getElementById(product_row_id).className = "";
      document.getElementById(product_up_button_id).style.display = "none";
      document.getElementById(product_down_button_id).style.display = "block";
      document.getElementById(content_id).style.display = "none";
  }
}