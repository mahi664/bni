import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CommonServiceService } from './common-service.service';
import { PaginationService } from './pagination.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, TopNavComponent, SideNavComponent, InventoryComponent, PurchaseOrderComponent, LoginComponent, DashboardComponent, InvoicesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CommonServiceService, PaginationService]
})
export class AppModule { }
