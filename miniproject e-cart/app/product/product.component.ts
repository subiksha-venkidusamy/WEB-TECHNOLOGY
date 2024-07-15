 import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = ['all', 'category1', 'category2'];
  selectedCategory: string = 'all';
  cart: any[] = [];
  userId: string = 'subiksha v';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
    });
  }

  addToCart(product: any): void {
    const quantity = 1; // Set the desired quantity
    this.cartService.addToCart(product._id, quantity).subscribe(
      (response) => {
        console.log('Product added to cart', response);
      },
      (error) => {
        console.error('Failed to add product to cart', error);
      }
    );
  }

  buyNow(product: any): void {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    this.router.navigate(['/order-form']);
  }

  filterByCategory(event: any) {
    const selectedCategory = event.target.value;
    if (selectedCategory === '') {
      this.filteredProducts = [...this.products]; // Reset to all products if no category selected
    } else {
      this.filteredProducts = this.products.filter(
        (product) => product.category === selectedCategory
      );
    }
  }
}