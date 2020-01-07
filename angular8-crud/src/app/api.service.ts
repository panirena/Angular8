import { Product } from './product';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl).pipe(
      tap(p => console.log('fetched products')),
      catchError(this.handleError('getProducts',[]))
    );
  }

  getProduct(id: number): Observable<Product>
  {
    const url = '${apiUrl}/${id}';
    return this.http.get<Product>(url).pipe(
    tap(_ => console.log('fetched product with id: ${id}')),
    catchError(this.handleError<Product>('getProduct ${id}'))
    );
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post(apiUrl, product, httpOptions).pipe(
      tap((prod: Product) => console.log('added product w/ id=${product.id}')),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

  updateProduct(id: any, product: Product): Observable<any> {
    const url = '${apiUrl}/${id}';
    return this.http.put(url, product, httpOptions).pipe(
      tap(_=>console.log('updated product id=${id}')),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id: any): Observable<Product>{
    const url = '${apiUrl}/${id}';
    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_=> console.log('deleted product id=${id}')),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }
}

