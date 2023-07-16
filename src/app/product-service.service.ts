import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public httpClient:HttpClient) { }
  loadProductList(){
    return this.httpClient.get<any>('https://64a686f7096b3f0fcc7ff71c.mockapi.io/sample-angular-app/products');
  }
}
