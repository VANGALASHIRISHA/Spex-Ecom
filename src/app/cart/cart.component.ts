import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { OrdersService } from '../orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private service: CartService,
    private router: Router,
    private os: OrdersService,
  ) {}

  products: any[] = [];
  allOrders: any[] = [];
  totalAmount: number = 0;
  result:any;

  ngOnInit(){
    this.username = localStorage.getItem("userloggedin");
    this.service.getcartItems().subscribe((res)=>{
      this.products = res;

      this.totalAmount = this.products.reduce((sum, item) => sum + item.productPrice, 0);
    });

    this.os.getOrdersByUsername(localStorage.getItem("userloggedin")).subscribe((e)=>{
      this.allOrders = e;
    });
  }
  selectedProduct:any;
  openOrderModal(p:any){
this.selectedProduct = p;
}
order:any; 
  username:any; 
 address:any; 
 contact:any; 
 email:any; 
placeOrders(){

if(!this.address || !this.contact || !this.email){
return;
}

this.order={
...this.selectedProduct,
username:this.username,
address:this.address,
contact:this.contact,
email:this.email
};

this.os.OrderNow(this.order);

Swal.fire({
title:"Order Placed!",
icon:"success"
});

/* Close modal manually */
const modal=document.getElementById('orderModal');

if(modal){
const bootstrapModal =
(window as any).bootstrap.Modal.getInstance(modal);

bootstrapModal.hide();
}

// this.router.navigateByUrl("/dashboard/orders");
// this.router.navigateByUrl("/admindashboard/orders");

}
}
    // product:any;
    
    // addNow(){
    //   this.service.addtocart(
    //     {...this.product,
    //       username:localStorage.getItem("userloggedIn")
    //     }
    //   )
    
    // Swal.fire({
    //   title: "Good job!",
    //   text: "Prdouct added Successfully to the Cart!",
    //   icon: "success"
    // });
    //   this.router.navigateByUrl("/dashboard/cart");
    // }
    
  
  

