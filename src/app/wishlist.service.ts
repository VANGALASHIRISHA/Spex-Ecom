import { Injectable } from '@angular/core';
import { SpexService } from './spex.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
wishlist: any[] = [];
  addtowishlist(obj:any){
    
   this.wishlist.push(obj);
  }
   getwishListItems(){
    return of(this.wishlist)
  }
  getwishItemsByUsername(username:any){
    return of(this.wishlist.filter(p=>p.username==username));
  }
  getwishlistLength(){
    return this.wishlist.length;
  }
}
