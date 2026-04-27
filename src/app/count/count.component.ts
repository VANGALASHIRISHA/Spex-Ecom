import { Component } from '@angular/core';
import { SpexService } from '../spex.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
  constructor(private s1:SpexService,private s2:CartService,private s3:WishlistService){}
  productCount=0;wishCount=0;cartCount=0;
  ngDoCheck()
{
  this.wishCount=this.s3.getwishlistLength();
  this.cartCount=this.s2.getCartLength();
  this.productCount=this.s1.getProductsLength();
}


}
