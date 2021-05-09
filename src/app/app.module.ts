import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { PurchaseOrderComponent } from "./purchase-order/purchase-order.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { CommonServiceService } from "./common-service.service";
import { PaginationService } from "./pagination.service";
import { InvoiceGenerationComponent } from "./invoice-generation/invoice-generation.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { GoogleChartsModule } from "angular-google-charts";
import { CategoryComponent } from "./category/category.component";
import { CategoryService } from "./category.service";
import { HttpClientModule } from "@angular/common/http";
import { PurchaseInvoiceGenerationComponent } from './purchase-invoice-generation/purchase-invoice-generation.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CustomersComponent } from './customers/customers.component';
import { VaccineAppointmentComponent } from './vaccine-appointment/vaccine-appointment.component';
import { VaccineAppointmentService } from './vaccine-appointment.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopNavComponent,
    SideNavComponent,
    InventoryComponent,
    PurchaseOrderComponent,
    LoginComponent,
    DashboardComponent,
    InvoicesComponent,
    InvoiceGenerationComponent,
    CategoryComponent,
    PurchaseInvoiceGenerationComponent,
    FileUploadComponent,
    CustomersComponent,
    VaccineAppointmentComponent
  ],
  bootstrap: [AppComponent],
  providers: [CommonServiceService, PaginationService, CategoryService, VaccineAppointmentService]
})
export class AppModule {}
