import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


constructor(private rou:Router){}

products = [
{
 productName:'Ray-Ban Frame',
 productPrice:4500,
 productImage:'assets/images/fimage1.jpg'
},
{
 productName:'Titan Glasses',
 productPrice:3200,
 productImage:'assets/images/titan glass.jpg'
},
{
 productName:'Oakley Specs',
 productPrice:5500,
 productImage:'assets/images/Oakley Specs.png'
}
];

click(){
 this.rou.navigateByUrl('/login');
}

}
