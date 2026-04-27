import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private os:OrdersService){}
  allOrders:any;
  ngOnInit(){
    this.os.getOrdersByUsername(localStorage.getItem("userloggedin")).subscribe((e)=>{
      this.allOrders=e;
    })
    
  }


  
  }




