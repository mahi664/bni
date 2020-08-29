import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopNavComponent, SideNavComponent, InventoryComponent, PurchaseOrderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
