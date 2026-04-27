import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   constructor(private bs:Router,private cart:CartService){}
  username:any;
  logoutUser(){
    localStorage.removeItem("userloggedin");
    this.bs.navigateByUrl("/login")
  }
  ngOnInit(){
    if(localStorage.getItem("userloggedin")){
      this.username=localStorage.getItem("userloggedin")
    }
    else{
      this.bs.navigateByUrl("/login")
    }
  }
   len:any;
  ngDoCheck(){
    this.len=this.cart.getCartLength();
  }

}
