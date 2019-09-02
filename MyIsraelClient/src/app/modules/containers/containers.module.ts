import { NgModule } from '@angular/core';
import { FeaturesModule } from '../features/features.module'
import { ProductsModule } from '../products/products.module';
import { ContainerComponent } from './components/container/container.component';
import { ContainersComponent } from './components/containers.component';


@NgModule({
  declarations:[
    ContainersComponent,
    ContainerComponent
  ],
  imports: [
    FeaturesModule,
    ProductsModule
  ],
  exports:[
    ContainersComponent
  ],
  providers: [  ],
})

export class ContainersModule {}
