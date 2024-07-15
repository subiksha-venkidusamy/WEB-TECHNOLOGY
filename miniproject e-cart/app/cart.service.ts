import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:5000/api/carts'; // Update the URL accordingly

  constructor(private http: HttpClient) {}

  addToCart(productId: string, quantity: number): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/add`, {
        productId,
        quantity,
      })
      .pipe(
        catchError((error) => {
          console.error('Error adding product to cart:', error);
          return throwError(error);
        })
      );
  }

  getCartItems(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/usercart/${userId}`).pipe(
      catchError((error) => {
        console.error('Error fetching cart items:', error);
        return throwError(error);
      })
    );
  }
}
