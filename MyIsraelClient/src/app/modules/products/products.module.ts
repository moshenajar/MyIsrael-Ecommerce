import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsDataService } from './services/products-data.service';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './components/productDetails/product-details.component';


@NgModule({
  declarations:[
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    ProductsRoutingModule,
    CommonModule,
  ],
  exports:[
    ProductsComponent,
    ProductsRoutingModule
  ],
  providers: [ ProductsDataService ],
})

export class ProductsModule {}