import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';

export const routes: Routes = [
    {path: "products-list", component: ProductsListComponent},
    {path: "view-products", component: ViewProductsComponent},
    {path: "", redirectTo: "products-list", pathMatch: "full"},
    {path: "**", redirectTo: "products-list", pathMatch: "full"}
];
