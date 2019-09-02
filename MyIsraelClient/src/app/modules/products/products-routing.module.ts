import { ProductDetailsComponent } from './components/productDetails/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, RouterEvent } from '@angular/router';
import { ProductsComponent } from './components/products.component';
import { DefaultLayoutComponent } from 'src/app/containers/default-layout/default-layout.component';
import { filter } from 'rxjs/operators';


const routes: Routes = [
    {
        path: 'products',
        component: DefaultLayoutComponent,
        children:[
            {path: '', component: ProductsComponent},
        ]
    },
    {
        path: 'productDetails',
        component: DefaultLayoutComponent,
        children:[
            {path: '', component: ProductDetailsComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ProductsRoutingModule {
    constructor(public router: Router)
    {
        router.events.pipe(
            filter(e => e instanceof RouterEvent)
          ).subscribe(e => {
            console.log(e);
            
          });
    }
 }