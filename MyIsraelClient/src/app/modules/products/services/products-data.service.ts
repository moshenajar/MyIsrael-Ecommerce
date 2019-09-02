import { Injectable } from '@angular/core';
import { IProduct } from '../entities/interfaces/product.interface'
import * as productsData from '../../../../assets/json/products.json';

@Injectable({
    providedIn: 'root'
})

export class ProductsDataService{
    private products:IProduct[] = [];

    constructor(){
        console.log("ProductsDataService - constructor");
        let data: any  = productsData;
        this.products = data.default;
    }

    getAllProducts()
    {
        return this.products;
        }
}
