import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpexService {

  constructor() { }
products = [
  {
    productId: 1,
    productName: "Ray-Ban Optical Frame",
    productPrice: 4500,
    productModel: "RB101",
    productType: "Optical",
    productImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300"
  },
  {
    productId: 2,
    productName: "Titan Eye+ Frame",
    productPrice: 2500,
    productModel: "TE202",
    productType: "Optical",
    productImage: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=300"
  },
  {
    productId: 3,
    productName: "Oakley Optical Frame",
    productPrice: 5200,
    productModel: "OX404",
    productType: "Optical",
    productImage: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=300"
  },
  {
    productId: 4,
    productName: "Classic Black Frame",
    productPrice: 1999,
    productModel: "CB101",
    productType: "Optical",
    productImage: "assets/images/frame3.jpg"
  },
  {
    productId: 5,
    productName: "Transparent Crystal Frame",
    productPrice: 2499,
    productModel: "TC202",
    productType: "Optical",
    productImage: "assets/images/image1.jpg"
  },
  {
    productId: 6,
    productName: "Round Vintage Frame",
    productPrice: 1799,
    productModel: "RV303",
    productType: "Optical",
    productImage: "assets/images/image2.jpg"
  },
  {
    productId: 7,
    productName: "Metal Thin Frame",
    productPrice: 2999,
    productModel: "MT404",
    productType: "Optical",
    productImage: "assets/images/image3.jpg"
  },
  {
    productId: 8,
    productName: "Blue Light Computer Glasses",
    productPrice: 1499,
    productModel: "BL505",
    productType: "Computer",
    productImage: "assets/images/image4.jpg"
  },
  {
    productId: 9,
    productName: "Square Black Frame",
    productPrice: 2199,
    productModel: "SB606",
    productType: "Optical",
    productImage: "assets/images/image5.jpg"
  },
  {
    productId: 10,
    productName: "Premium Gold Frame",
    productPrice: 3499,
    productModel: "PG707",
    productType: "Optical",
    productImage: "assets/images/image6.jpg"
  },
  {
    productId: 11,
    productName: "Half Rim Office Frame",
    productPrice: 1899,
    productModel: "HR808",
    productType: "Optical",
    productImage: "assets/images/image7.jpg"
  },
  {
    productId: 12,
    productName: "Sporty Frame",
    productPrice: 2799,
    productModel: "SP909",
    productType: "Optical",
    productImage: "assets/images/image8.jpg"
  },
  {
    productId: 13,
    productName: "Ultra Light Frame",
    productPrice: 1599,
    productModel: "UL1010",
    productType: "Optical",
    productImage: "assets/images/image9.jpg"
  },

  {
    productId: 14,
    productName: "Wayfarer Style Frame",
    productPrice: 2599,
    productModel: "WF1111",
    productType: "Optical",
    productImage: "assets/images/image10.jpg"
  },
   {
    productId: 15,
    productName: "Wayfarer Style Frame",
    productPrice: 3599,
    productModel: "WF1111",
    productType: "Optical",
    productImage: "assets/images/eyeglasses.jpg"
  },
  {
  productId: 16,
  productName: "Blue Light Blocking Glasses",
  productPrice: 1499,
  productModel: "BLB101",
  productType: "Optical",
  productImage: "assets/images/sunglasses.jpg"
},
{
  productId: 17,
  productName: "Premium Sunglasses UV400",
  productPrice: 1999,
  productModel: "SUN202",
  productType: "Sunglasses",
  productImage: "assets/images/frame3.jpg"
},
{
  productId: 18,
  productName: "Daily Wear Contact Lenses",
  productPrice: 999,
  productModel: "CLD500",
  productType: "Lens",
  productImage: "assets/images/image12.jpg"
},
{
  productId: 19,
  productName: "Anti-Glare Computer Glasses",
  productPrice: 1599,
  productModel: "AGC404",
  productType: "Optical",
  productImage: "assets/images/image13.jpg"
},
{
  productId: 20,
  productName: "Kids Flexible Eyeglasses",
  productPrice: 1299,
  productModel: "KID707",
  productType: "Optical",
  productImage: "assets/images/image14.jpg"
},
{
  productId: 21,
  productName: "Lens Cleaning Kit",
  productPrice: 299,
  productModel: "LCK111",
  productType: "Accessories",
  productImage: "assets/images/image16.jpg"
}
];

getProducts(){
    return of(this.products);
  }
  addProducts(obj:any){
    this.products.push(obj);
  }
  deleteProduct(pid:any){
    var index=this.products.findIndex(p=>p.productId==pid);
    if(index!=-1){
      this.products.splice(index,1);
      return "Product Deleted Successfully"
  
  }
  else{
    return "Something went Wrong"
  }
  }
updateProduct(obj:any){
  var index=this.products.findIndex((p)=>p.productId==obj.productId);
  if(index!=-1){
      this.products.splice(index,1,obj);
      return "Product Updated"
  
  }
  else{
    return "Something Went wrong";
  }
}
getProductById(pid:any){
  var reqproduct=this.products.find((p)=>p.productId==pid);
         return reqproduct;
}
 getProductsLength(){
    return this.products.length;
  }

}
