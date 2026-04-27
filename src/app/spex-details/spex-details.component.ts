import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpexService } from '../spex.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { WishlistService } from '../wishlist.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-spex-details',
  templateUrl: './spex-details.component.html',
  styleUrl: './spex-details.component.css'
})
export class SpexDetailsComponent {
   constructor(private rou:ActivatedRoute,private service:SpexService ,private cart:CartService,private s:Router,
    private si:WishlistService,private os:OrdersService){}
    reqpid:any;
  product:any;
  username:any;
  ngOnInit(){
     this.username = localStorage.getItem("userloggedin");
    this.reqpid=this.rou.snapshot.paramMap.get('pid');
    this.product=this.service.getProductById(this.reqpid);
  }
  result:any;
addNow(){
  this.cart.addtocart(
    {...this.product,
      username:localStorage.getItem("userloggedIn")
    }
  )

Swal.fire({
  title: "Good job!",
  text: "Prdouct added Successfully to the Cart!",
  icon: "success"
});
  this.s.navigateByUrl("/dashboard/cart");
}
order:any; 
// username:any; 
address:any; 
contact:any; 
email:any; 
placeOrders(){
  this.order = {
    ...this.product,
    username: localStorage.getItem("userloggedin"),
    address: this.address,
    contact: this.contact,
    email: this.email
  }

  this.result = this.os.OrderNow(this.order);
  // setTimeout(() => {
  Swal.fire({
  title: "Good job!",
  text: "Prdouct added Successfully to the Orders!",
  icon: "success"
});
  // this.s.navigateByUrl("/dashboard/orders");
  // this.s.navigateByUrl("/admindashboard/orders");
// },50000);

}


}
