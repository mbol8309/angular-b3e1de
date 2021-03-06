import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addProduct(product: Product) {
    this.items.push(product);
  }

  getProducts(): Product[] {
    return this.items;
  }

  Count() {
    return this.items.length;
  }

  clearProducts() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
