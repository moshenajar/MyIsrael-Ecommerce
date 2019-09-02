import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomepageComponent }    from './homepage.component';
import {ContainersModule } from '../containers/containers.module'


@NgModule({
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ContainersModule,
  ],
  declarations: [
    HomepageComponent,
  ],
  providers: []
})
export class HomePageModule { }