import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://fakestoreapi.com/products"
  private _httpClient = inject(HttpClient)
  constructor() { }

  getAllProducts(): Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(this.baseUrl)
  }
  getProduct(id : number): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseUrl}/${id}`)
  }
}
