import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { PurchaseOrderComponent } from "./purchase-order/purchase-order.component";
import { LoginComponent } from "./login/login.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InvoicesComponent } from "./invoices/invoices.component";
import { InvoiceGenerationComponent } from "./invoice-generation/invoice-generation.component";
import { CategoryComponent } from "./category/category.component";
import { PurchaseInvoiceGenerationComponent } from "./purchase-invoice-generation/purchase-invoice-generation.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Inventory", component: InventoryComponent },
  { path: "Dashboard", component: DashboardComponent },
  { path: "Invoices", component: InvoicesComponent },
  { path: "Purchase-Orders", component: PurchaseOrderComponent },
  { path: "New-Sales-Invoice", component: InvoiceGenerationComponent },
  { path: "Categories", component: CategoryComponent },
  {
    path: "New-Purchase-Invoice",
    component: PurchaseInvoiceGenerationComponent
  },
  { path: "**", component: LoginComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
