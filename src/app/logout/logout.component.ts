import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private bs: Router, private cart: CartService) {}

  username: any;
  len: any;
  logoutUser() {
    localStorage.clear();  
    this.bs.navigateByUrl("/login");
  }

  ngOnInit() {

    const user = localStorage.getItem("userloggedin");
    const role = localStorage.getItem("role");

    if (user && role === 'admin') {
      this.username = user;
    } else {
     
      this.bs.navigateByUrl("/login");
    }
  }

  ngDoCheck() {
    this.len = this.cart.getCartLength(); 
  }


}
