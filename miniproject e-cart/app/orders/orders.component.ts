import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.orders = this.ordersService.getOrders();
  }
}
