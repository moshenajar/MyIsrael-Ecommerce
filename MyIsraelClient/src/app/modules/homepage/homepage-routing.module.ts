import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homepageRoutes: Routes = [
   // { path: '', component: HomepageComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(homepageRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomePageRoutingModule { }