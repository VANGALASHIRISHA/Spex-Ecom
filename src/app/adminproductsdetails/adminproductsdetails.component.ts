import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpexService } from '../spex.service';
import { CartService } from '../cart.service';
import { WishlistService } from '../wishlist.service';
import { OrdersService } from '../orders.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminproductsdetails',
  templateUrl: './adminproductsdetails.component.html',
  styleUrl: './adminproductsdetails.component.css'
})
export class AdminproductsdetailsComponent {
  constructor(private service:SpexService,private router:Router,private si:WishlistService){}
    product:any;
    ngOnInit(){
      this.service.getProducts().subscribe((res)=>{
        this.product=res;
      })  
  }
  // openDetails(pid:any){
  //   this.router.navigateByUrl('/dashboard/view/'+pid);
  // }
  added()
  {
    console.log("added")
  }
  addtoNow(p:any){
    console.log("hello");
      this.si.addtowishlist(
        {...p,
          username:localStorage.getItem("userloggedin")
        }
      );
  Swal.fire({
    title: "Good job!",
    text: "Prdouct added Successfully to the WishList!",
    icon: "success"
  });
    this.router.navigateByUrl("/dashboard/wishlist");
  }

  login(){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "<a href=\"#\">Please Login As User?</a>"
});
 this.router.navigateByUrl("/login");
   
    
  }

}
