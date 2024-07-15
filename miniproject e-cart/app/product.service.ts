import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'http://localhost:5000/api/products';
  private cartUrl = 'http://localhost:5000/api/cart/add'; // Add cart endpoint URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  addToCart(cartItem: any): Observable<any> {
    // Accept cart item object as parameter
    return this.http.post(this.cartUrl, cartItem);
  }
  
}
