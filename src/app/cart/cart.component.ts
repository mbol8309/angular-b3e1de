import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  items = this.cartService.getProducts();
  Count() {
    return this.cartService.Count();
  }

  TotalPrice() {
    let price = 0;
    for (let i = 0; i < this.items.length; i++) {
      price += this.items[i].price;
    }
    return price;
  }
  ngOnInit() {}
}
