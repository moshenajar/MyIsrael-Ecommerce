import { Component, OnInit, Input, OnDestroy, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, SimpleChanges } from '@angular/core';
import { IProduct } from '../../entities/interfaces/product.interface';


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
  })

  export class ProductComponent 
  implements OnInit, OnDestroy, OnChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck {
  

    @Input()product:IProduct;

    constructor(){
      console.log("product.components - constructor");
    }

    ngOnInit():void {
      console.log("product.components - ngOnInit");
     }

    ngOnDestroy(): void {
      console.log("product.components - ngOnDestroy");
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log("product.components - ngOnChanges");
    }
    ngAfterContentChecked(): void {
      console.log("product.components - ngAfterContentChecked");
    }
    ngAfterContentInit(): void {
      console.log("product.components - ngAfterContentInit");
    }
    ngAfterViewChecked(): void {
      console.log("product.components - ngAfterViewChecked");
    }
    ngAfterViewInit(): void {
      console.log("product.components - ngAfterViewInit");
    }
    ngDoCheck(): void {
      console.log("product.components - ngDoCheck");
    }

    
  }