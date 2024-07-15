import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  userId: string = 'subiksha v';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Assuming you have the userId available in your component
    const userId = '123'; // Replace '123' with the actual userId
    this.cartService.getCartItems(userId).subscribe(
      (items) => {
        console.log('Cart items:', items);
        this.cartItems = items;
      },
      (error) => {
        console.error('Failed to load cart items', error);
      }
    );
  }

  loadCartItems(): void {
    this.cartService.getCartItems(this.userId).subscribe(
      (items) => {
        console.log('Cart items:', items);
        this.cartItems = items;
      },
      (error) => {
        console.error('Failed to load cart items', error);
      }
    );
  }
}

