import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './components/all-product/all-product.component';
import { ProductDetalisComponent } from './components/product-detalis/product-detalis.component';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetalisComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ProductsModule { }
