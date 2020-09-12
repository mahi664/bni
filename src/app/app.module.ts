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
import { InvoiceGenerationComponent } from './invoice-generation/invoice-generation.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, Ng2SearchPipeModule, GoogleChartsModule],
  declarations: [ AppComponent, HelloComponent, TopNavComponent, SideNavComponent, InventoryComponent, PurchaseOrderComponent, LoginComponent, DashboardComponent, InvoicesComponent, InvoiceGenerationComponent],
  bootstrap:    [ AppComponent ],
  providers: [CommonServiceService, PaginationService]
})
export class AppModule { }
