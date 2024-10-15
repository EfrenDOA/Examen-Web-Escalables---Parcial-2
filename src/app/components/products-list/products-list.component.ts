import { Component, inject, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../services/products.services';
import { Product } from '../../interfaces/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.fetchProducts();
  }

  public get products(): Product[] {
    return this.productsService.products;
  }

  // @Input()
  // public products: Product[] = [];
}
