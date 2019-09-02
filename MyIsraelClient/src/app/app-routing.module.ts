import { ProductsComponent } from './modules/products/components/products.component';
import { FeaturesComponent } from './modules/features/components/features.component';
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomepageComponent } from './modules/homepage/homepage.component';
import { DefaultLayoutComponent } from './containers';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { RegistrationComponent } from './modules/account/registration/registration.component';
import { PrivateAreaComponent } from './modules/UserPages/private-area/private-area.component';


const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
          title: 'Home'
        },
        children: [
            { path: '', component: HomepageComponent },
            { path: 'registration', component: RegistrationComponent },
            { path: 'auth-callback', component: AuthCallbackComponent },
            { path: 'portfolios', component: ProductsComponent},
            { path: 'sites', component: ProductsComponent},
            { path: 'private-area', canActivate:[AuthGuard], component: PrivateAreaComponent},
          ],
       /* pathMatch: 'full' - why this is not working good when i add this???*/
    },
    /*{ path: '',   redirectTo: 'home', pathMatch: 'full' },*/
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class AppRoutingModule { }