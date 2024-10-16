import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "products-list", component: ProductsListComponent},
    {path: "view-products", component: ViewProductsComponent},
    {path: "not-found", component: NotFoundComponent},
    {path: "", redirectTo: "products-list", pathMatch: "full"},
    {path: "**", redirectTo: "not-found", pathMatch: "full"}
];
