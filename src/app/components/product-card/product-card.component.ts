import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../services/products.services';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  private productsService = inject(ProductsService);
  private idSelect: number = 0;
  private router = inject(Router);

  @Input()
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


  public sendId(){
    console.log(this.product);
    this.productsService.setID = this.product.id - 1;
    this.idSelect = this.productsService.getID;
    this.router.navigate(['/view-products']);

  }

}