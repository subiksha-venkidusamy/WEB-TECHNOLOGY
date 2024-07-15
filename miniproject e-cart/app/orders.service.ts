import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: any[] = [];

  constructor() {}

  getOrders(): any[] {
    return this.orders;
  }

  addOrder(order: any): void {
    this.orders.push(order);
  }
}
