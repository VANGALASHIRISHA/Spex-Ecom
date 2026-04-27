import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SpexService } from '../spex.service';

@Component({
  selector: 'app-add-spex',
  templateUrl: './add-spex.component.html',
  styleUrl: './add-spex.component.css'
})
export class AddSpexComponent {
  productForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private service:SpexService){
  this.productForm=this.fb.group({
    productId: ['',Validators.required],
      productName : ['',Validators.required],
        productPrice: ['',Validators.required],
          productModel: ['',Validators.required],
            productImage: ['',Validators.required]

  });
}
 addNow(){
    this.service.addProducts(this.productForm.value);
  this.productForm.reset();
  Swal.fire({
  title: "Good job!",
  text: "Prduct Added Successfully!",
  icon: "success"
});
  }

}
