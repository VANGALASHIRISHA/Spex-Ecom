import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';
import { SpexService } from '../spex.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrl: './vieworders.component.css'
})
export class ViewordersComponent {
  constructor( private os:OrdersService,private s:SpexService){}
  orders:any;
  ngOnInit(){
     this.os.getAllOrders().subscribe((res)=>{
      this.orders=res;
      console.log(this.orders)
     })
     
    }
  }
  


