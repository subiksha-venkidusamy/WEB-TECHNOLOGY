import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products = [
    {
      id: 1,
      name: 'skirt',
      price: 1500,
      imageUrl: 'assets/dress.jpeg',
      description:
        'Elegant Fuddruckers dress, cotton fabric, available in all sizes.',
    },
    {
      id: 2,
      name: 'Grinder',
      price: 3000,
      imageUrl: 'assets/grinder.jpeg',
      description:
        'Preethi Grinder, 3 jars, multi-purpose, 500W motor, stainless steel.',
    },
    {
      id: 3,
      name: 'Mixer',
      price: 2000,
      imageUrl: 'assets/mixer.jpeg',
      description: 'Bajaj Mixer, 3-speed control, 2 jars, 500W, durable build.',
    },
    {
      id: 4,
      name: 'Sunscreen',
      price: 500,
      imageUrl: 'assets/sunscreen.jpeg',
      description:
        'Neutrogena Sunscreen,SPF 50+, 100ml, water-resistant, non-greasy.',
    },
    {
      id: 5,
      name: 'Hair Bands',
      price: 100,
      imageUrl: 'assets/hairbands.jpeg',
      description: 'Colorful hair bands, pack of 10, elastic, durable.',
    },
    {
      id: 6,
      name: 'Mobile Case',
      price: 200,
      imageUrl: 'assets/mobilecase.jpeg',
      description:
        'Spigen mobile case, designed for iPhone 12, shock-absorbent, sleek design.',
    },
  ];

  cart: any[] = [];

  addToCart(product: any) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  buyNow(product: any) {
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({ ...product, status: 'Pending' });
    localStorage.setItem('orders', JSON.stringify(orders));
    this.addToCart(product);
  }
}
