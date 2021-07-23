import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent {
  @Input() product!: Product | undefined;
  @Output() nota = new EventEmitter();
  constructor() {}
}
