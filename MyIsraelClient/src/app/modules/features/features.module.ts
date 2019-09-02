import { NgModule } from '@angular/core';
import { FeaturesComponent } from './components/features.component';
import { FeatureComponent } from './components/feature/feature.component';


@NgModule({
  declarations:[
    FeaturesComponent,
    FeatureComponent
  ],
  imports: [
  ],
  exports:[
    FeaturesComponent
  ],
  providers: [  ],
})

export class FeaturesModule {}