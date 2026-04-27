import { Component } from '@angular/core';
import { SpexService } from '../spex.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-admincount',
  templateUrl: './admincount.component.html',
  styleUrl: './admincount.component.css'
})
export class AdmincountComponent {
   constructor(private s1:SpexService,private s2:CartService,private s3:WishlistService,private os:OrdersService,){}
    
     productCount: number = 0;
  orderCount: number = 0;
  userCount: number = 0;

    ngDoCheck()
  {
    this.productCount=this.s1.getProductsLength();
  
   this.os.getAllOrders().subscribe((res: any) => {
      this.orderCount = res.length;
    });
     this.userCount = this.getUserCount();

  }
   getUserCount(): number {
    let users = localStorage.getItem("users");

    if (users) {
      return JSON.parse(users).length;
    }

    return 1; // default admin user
  }
//     constructor(private s1:SpexService,private s2:CartService,private s3:WishlistService){}
//   productCount=0;wishCount=0;cartCount=0;
//   ngDoCheck()
// {
//   this.wishCount=this.s3.getwishlistLength();
//   this.cartCount=this.s2.getCartLength();
//   this.productCount=this.s1.getProductsLength();
// }


  }



