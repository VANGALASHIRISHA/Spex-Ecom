import { Injectable } from '@angular/core';
import { SpexService } from './spex.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:any[]=[];
  constructor(private si:SpexService) { }

  addtocart(obj:any){
   var index=this.si.products.findIndex((p)=>p.productId==obj.productId)
   this.cart.push(obj);
  }
  getcartItems(){
    return of(this.cart);
  }
  getCartLength(){
    return this.cart.length;
  }
 getCartItemsByUsername(usrername:any){
  return of(this.cart.filter(p=>p.usrername==usrername));
 }
 clearCart(){
this.cart=[];
}
}
