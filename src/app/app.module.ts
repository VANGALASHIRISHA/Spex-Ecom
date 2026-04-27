import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSpexComponent } from './add-spex/add-spex.component';
import { ViewSpexComponent } from './view-spex/view-spex.component';
import { ManageSpexComponent } from './manage-spex/manage-spex.component';
import { SpexDetailsComponent } from './spex-details/spex-details.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminproductsdetailsComponent } from './adminproductsdetails/adminproductsdetails.component';
import { RouterModule } from '@angular/router';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { CountComponent } from './count/count.component';
import { AdmincountComponent } from './admincount/admincount.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AddSpexComponent,
    ViewSpexComponent,
    ManageSpexComponent,
    SpexDetailsComponent,
    LoginComponent,
    SignComponent,
    LogoutComponent,
    OrdersComponent,
    WishlistComponent,
    CartComponent,
    AdmindashboardComponent,
    AdminproductsdetailsComponent,
    ViewordersComponent,
    CountComponent,
    AdmincountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
