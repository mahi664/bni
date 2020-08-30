import { Component, OnInit } from '@angular/core';

export class InvetoryDetails{
  constructor(public batchNo: string, public productName: string, public category: string, public totalQty: number, public inStock: number,public sellingPrice: number, public purchasedCost: number, public gst: number, public expDate:Date, public mfgDate: Date,public avilStockPercent: number){}
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {
  products = [
    new InvetoryDetails('XD2122','Test Product 1', 'Test Category 1', 20,19,480,400,12, new Date(),new Date(),19*100/20),
    new InvetoryDetails('XD2133','Test Product 2', 'Test Category 2', 40,15,40,20,18, new Date(),new Date(),15*100/40),
    new InvetoryDetails('XD2111','Test Product 1', 'Test Category 1', 200,121,480,400,12, new Date(),new Date(),121*100/200)
  ];
   categories = ['Test Category 1','Test Category 2','Test Category 3','Test Category 4','Test Category 5'];
  constructor() { }

  ngOnInit() {
  }

  expandProduct(entity_id){
    console.log(entity_id);
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