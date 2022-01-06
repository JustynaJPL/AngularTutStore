import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  // To gather the user's name and address, use the FormBuilder 
  // group() method to set the checkoutForm property to 
  // a form model containing name and address fields.
  public checkoutForm = this.formBuilder.group({
      name:'',
      address: ''});

// Inject the CartService so that the CartComponent can use 
//it by adding it to the constructor().
  constructor(private cartService:CartService, 
              private formBuilder: FormBuilder) {   }

  ngOnInit(): void {
  }
  items = this.cartService.getItems();
  // This code sets the items using the CartService getItems() 
  // method. You defined this method when you created cart.service.ts.

  onSubmit():void{
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submited!", 
      this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
