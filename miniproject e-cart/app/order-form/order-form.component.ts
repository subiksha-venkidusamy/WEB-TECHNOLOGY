import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  order: any = {
    productId: null,
    customerName: '',
    customerAddress: '',
    customerEmail: '',
    quantity: 1,
  };

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      this.order.productId = JSON.parse(storedProduct).id;
    }
  }

  submitOrder(): void {
    this.ordersService.addOrder(this.order);
    this.router.navigate(['/orders']);
  }
}
