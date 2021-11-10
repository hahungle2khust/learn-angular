import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl: string = 'http://localhost:1103';
  constructor(private http: HttpClient) { }
  // gọi API:
    listProducts() {
     return this.http.get(this.baseUrl + '/api/public/products');
  }

  //POST Method: add product:
    addProduct(productObj: any) {
      return this.http.post(this.baseUrl + '/api/public/products', productObj);
    }
}
//