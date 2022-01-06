import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


// Inject the CartService so that the CartComponent can use it by adding it to the constructor().
  constructor(private cartService:CartService) {   }

  ngOnInit(): void {
  }
  items = this.cartService.getItems();
  // This code sets the items using the CartService getItems() 
  // method. You defined this method when you created cart.service.ts.

}
