import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../services/products-data.service';
import { IProduct } from '../entities/interfaces/product.interface';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
  })

  export class ProductsComponent implements OnInit {
    productsSrv:ProductsDataService = null;
    public items:IProduct[] = null;

    constructor(
      productsDataService:ProductsDataService,
    ){
      console.log("products.components - constructor");
      this.productsSrv = productsDataService;
    }
    ngOnInit() {
      console.log("products.components - ngOnInit");
      this.items = this.productsSrv.getAllProducts();
      console.log(this.items);
     }
  }