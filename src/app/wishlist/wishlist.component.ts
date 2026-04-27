// import { Component } from '@angular/core';
// import { WishlistService } from '../wishlist.service';
// import { Router } from '@angular/router';
// import { CartService } from '../cart.service';
// import Swal from 'sweetalert2';
// import { SpexService } from '../spex.service';
// import { OrdersService } from '../orders.service';

// @Component({
//   selector: 'app-wishlist',
//   templateUrl: './wishlist.component.html',
//   styleUrl: './wishlist.component.css'
// })
// export class WishlistComponent {
//    constructor(private service:WishlistService,private router:Router,private cart:CartService,private s:SpexService,private os:OrdersService){}

//      products:any;
//       result:any;
//       addNow(obj:any){
//         this.result=this.cart.addtocart(obj);
//       Swal.fire({
//         title: "Good job!",
//         text: "Prdouct added Successfully to the Cart!",
//         icon: "success"
//       });
//         this.router.navigateByUrl("/dashboard/cart");
//       }
       
//       username:any;
//       ngOnInit(){
//            this.username = localStorage.getItem("userloggedin");
//        this.service.getwishItemsByUsername(localStorage.getItem("userloggedin")).subscribe((res)=>{
//         this.products=res;
//        })
//       }
//       order:any; 
//       // username:any; 
//       address:any; 
//       contact:any; 
//       email:any; 
//       product:any;
//       placeOrders(){
//         this.order = {
//           ...this.product,
//           username: localStorage.getItem("userloggedin"),
//           address: this.address,
//           contact: this.contact,
//           email: this.email
//         }
      
//         this.result = this.os.OrderNow(this.order);
//         Swal.fire({
//         title: "Good job!",
//         text: "Prdouct added Successfully to the Orders!",
//         icon: "success"
//       });
//         this.router.navigateByUrl("/admindashboard/orders");
      
//       }

// }
import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { SpexService } from '../spex.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(
    private service: WishlistService,
    private router: Router,
    private cart: CartService,
    private s: SpexService,
    private os: OrdersService
  ) {}

  products: any[] = [];
  result: any;

  username: any;
  product: any = {};   // IMPORTANT FIX

  address: any;
  contact: any;
  email: any;

  ngOnInit() {
    this.username = localStorage.getItem("userloggedin");

    this.service
      .getwishItemsByUsername(this.username)
      .subscribe((res) => {
        this.products = res;
      });
  }

  // ✅ FIX: set selected product for modal
  selectProduct(p: any) {
    this.product = p;
  }

  addNow(obj: any) {
    this.result = this.cart.addtocart(obj);

    Swal.fire({
      title: "Good job!",
      text: "Product added Successfully to the Cart!",
      icon: "success"
    });

    this.router.navigateByUrl("/dashboard/cart");
  }

  placeOrders() {

    const order = {
      ...this.product,
      username: this.username,
      address: this.address,
      contact: this.contact,
      email: this.email
    };

    this.os.OrderNow(order);

    Swal.fire({
      title: "Success!",
      text: "Product added Successfully to Orders!",
      icon: "success"
    });

    // this.router.navigateByUrl("/dashboard/orders");
    // this.router.navigateByUrl("/admindashboard/orders");
  }
}
