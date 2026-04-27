import { Component } from '@angular/core';
import { SpexService } from '../spex.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-spex',
  templateUrl: './manage-spex.component.html',
  styleUrl: './manage-spex.component.css'
})
export class ManageSpexComponent {
 constructor(private service:SpexService){}
  products:any;
  ngOnInit(){
    this.service.getProducts().subscribe((res)=>{
      this.products=res;
    })
  }
  result:any;
  deleteNow(pid:any){
    this.result=this.service.deleteProduct(pid);
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to Delete this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) Swal.fire({
    title: "Deleted!",
    text: "Your Product has been deleted.",
    icon: "success"
  });
});

  }

  dummy={
    productId:"",
    productName:"",
    productPrice:"",
    productModel:"",
    productImage:"",
  }
  updateToDummy(upobj:any){
    this.dummy=upobj;
  }
  storeinSerial(){
    this.result=this.service.updateProduct(this.dummy);
    Swal.fire({
      title: "Good job!",
      text: "Prdouct added Successfully to the Updated!",
      icon: "success"
    });
  }


}
