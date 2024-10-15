import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private http = inject(HttpClient);
  private apiURL = "https://fakestoreapi.com/products";

  private _products: Product[] = [];

  private _idSelect: number = 0;

  public fetchProducts() {
    this.http.get<Product[]>(this.apiURL).subscribe({
        next: (response)=> {
            console.log(response);
            this._products = response;
        },
        error: (error)=> {
            console.log(error);
        }     
    })
  }

  public get products(): Product[] {
    return this._products;
  }

  public set setID(id: number){
    console.log("ant: ", this._idSelect);
    this._idSelect = id;
    console.log("new: ", this._idSelect);
  }

  public get getID(): number {
    console.log("IDselect: ", this._idSelect);
    return this._idSelect;
  }
}
