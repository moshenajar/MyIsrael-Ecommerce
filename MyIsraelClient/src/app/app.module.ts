import { ProductsModule } from './modules/products/products.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './modules/homepage/homepage.module';
import {HomePageRoutingModule } from './modules/homepage/homepage-routing.module';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';

import { DefaultLayoutComponent } from './containers';

/*** */
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OrdersComponent } from './modules/orders/orders.component';
import { SideBarService } from './core/services/side-bar.service';
import { ProtectedComponent } from './protected/protected.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { ConfigService } from './shared/config.service';
import { CallApiComponent } from './modules/call-api/call-api.component';
import { SideBarComponent } from './containers/side-bar/side-bar.component';
import { RegistrationComponent } from './modules/account/registration/registration.component';

import { EnumKeyValueListPipe } from "./shared/pipe/enumlist.pipe";
import { PrivateAreaComponent } from './modules/UserPages/private-area/private-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { WildcardRoutingModule } from './modules/pageNotFound/page-not-found-routing.module';






//import { AuthGuardService } from './services/auth-guard.service';
//import { AuthService } from './services/auth.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
/*** */

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DefaultLayoutComponent,
    OrdersComponent,
    ProtectedComponent,
    AuthCallbackComponent,
    CallApiComponent,
    SideBarComponent,
    RegistrationComponent,
    EnumKeyValueListPipe,
    PrivateAreaComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    HomePageModule,
    ProductsModule,
    // Should be last
    WildcardRoutingModule
  ],
  providers: [
    ConfigService,
    SideBarService/*,
    AuthGuardService,
    AuthService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
