import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewSpexComponent } from './view-spex/view-spex.component';
import { AddSpexComponent } from './add-spex/add-spex.component';
import { ManageSpexComponent } from './manage-spex/manage-spex.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { LogoutComponent } from './logout/logout.component';
import { SpexDetailsComponent } from './spex-details/spex-details.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminproductsdetailsComponent } from './adminproductsdetails/adminproductsdetails.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { CountComponent } from './count/count.component';
import { AdmincountComponent } from './admincount/admincount.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign', component: SignComponent },
  {path:'logout',component:LogoutComponent},
  {
    path: 'admindashboard',
    component: AdmindashboardComponent,
    children: [
       { path:'hello', component: AdminproductsdetailsComponent},
       {path:'orders',component:ViewordersComponent},
      { path: 'add', component: AddSpexComponent },
      {path:'count',component:AdmincountComponent},
      { path: 'manage', component: ManageSpexComponent }  
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path:'count',component:CountComponent},
      { path: 'view', component: ViewSpexComponent },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'view/:pid', component: SpexDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
