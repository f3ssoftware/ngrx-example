import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { WishlistModule } from './wishlist/wishlist.module';
import { CarsModule } from './cars/cars.module';
import { carsReducer } from './shared/reducers/car.reducer';
import { wishlistReducer } from './shared/reducers/wishlist.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ wishlist: wishlistReducer, cars: carsReducer }),
    HttpClientModule,
    WishlistModule,
    CarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
