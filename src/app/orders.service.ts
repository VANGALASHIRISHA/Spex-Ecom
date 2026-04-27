import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
orders:any[]=[];

OrderNow(obj:any){
  this.orders.push(obj);
}

getOrdersByUsername(str:any){
  return of(this.orders.filter(obj=>obj.username == str));
}

getAllOrders(){
  return of(this.orders);
}
}
