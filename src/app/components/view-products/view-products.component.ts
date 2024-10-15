import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../services/products.services';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  private productsService = inject(ProductsService);
  
  public product: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0
    }
  };

  constructor() {
    const selectedId = this.productsService.getID;
    this.product = this.productsService.products[selectedId];

    if (!this.product) {
      console.error('Producto no encontrado.');
    }
  }
  
}
