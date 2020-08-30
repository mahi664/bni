import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Inventory', component: InventoryComponent},
  {path:'Dashboard', component: DashboardComponent},
  {path:'Invoices', component: InvoicesComponent},
  {path:'**',component:LoginComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }