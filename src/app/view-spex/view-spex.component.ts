import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpexService } from '../spex.service';
import { WishlistService } from '../wishlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-spex',
  templateUrl: './view-spex.component.html',
  styleUrl: './view-spex.component.css'
})
export class ViewSpexComponent {
  constructor(private service:SpexService,private router:Router,private si:WishlistService){}
  product:any;
  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
      this.product=res;
    })  
}
openDetails(pid:any){
  this.router.navigateByUrl('/dashboard/view/'+pid);
}
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

}
